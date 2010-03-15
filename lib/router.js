var logger = require('./logger').logger;

logger.verbose("Loading router");

var Router = jZenFn({
    standard_name: "Router",
    description: "Master routing object.",
});

Router.routes = [];

Router.map = jZenFn({
    standard_name: "Router.map",
    description: "Pushes a route onto the routes map.",
    examples: ["router.map({url: '/posts', controller: 'blog', action: 'index'});"],
    body: function(route) {
        http_method = route.method || "GET";
        this.routes.push({path: route.path, controller: route.controller, action: route.action, method: http_method});
    }
});

Router.resource = jZenFn({
    standard_name: "Router.resource",
    description: "Convenience method to add a series of urls for a given resource.",
    examples: ["router.resources('post');"],
    body: function(resource) {
        routes = this.routes;
        // TODO: Inflection (singular vs plural)
        prefix = "/" + resource;
        [["GET",  prefix, "index"],             // index
         ["POST", prefix, "create"],            // create
         ["GET",  prefix + "/new", "new"],      // new
         ["GET",  prefix + "/:id", "show"],     // show
         ["PUT",  prefix + "/:id", "update"],   // update
         ["DELETE", prefix + "/:id", "destroy"] // delete
        ].each(function(route) {
            method = route[0];
            url    = route[1];
            action = route[2];
            
            routes.push({path: url, controller: resource.toLowerCase(), action: action, method: method});
        });}
});
              

Router.root = jZenFn({
    standard_name: "Router.root",
    description: "Convenience method to map the root url ('/'). Will always use GET http method.",
    examples: ["router.root({controller: 'home', action: 'welcome'});"],
    body: function(route) {
        this.routes.push({path: "/", controller: route.controller, action: route.action, method: "GET"});
    }});

Router.parseParams = jZenFn({
    standard_name: "Router.parseParams",
    description: "Creates variables specified in route path from incoming request url. It assumes the passed url *does* match the pattern specified in the path passed.",
    examples: ["router.parseParams(some_path, some_url)"],
    todo: ["Flesh out the documentation"],
    body: function(path, url) {
        path_split = path.split("/:");
        url_split = url.split("?")[0].split("/");

        logger.verbose("Path: " + path_split);
        logger.verbose("URL: " + url_split);

        params = {};

        for (var idx = 1; idx < path_split.length; idx++) {
            evil = "params." + path_split[idx] + " = '" + url_split[idx + 1] + "'";
            logger.debug("Param generation: " + evil);
            eval(evil);
        }

        get_string = url.split("?");
        get_params = get_string.slice(1,get_string.length);

        get_params.each(function(param) {
            name  = param.split("=")[0];
            value = param.split("=")[1];
            try {
                evil = "params." + name + " = '" + value + "'";
                eval(evil);
            } catch (ex) {
                logger.warn("Could not assign params." + name + " = '" + value + "'");
            }
        });

        return params;
}});

Router.match = jZenFn({
    standard_name: "Router.match",
    description: "Verifies if the passed url matches a given path via regex",
    examples: ["router.match(some_path, some_url)"],
    todo: ["Flesh out the documentation"],
    body: function(route, request) {
        if (route.method != request.method) {
            logger.verbose("Not the right method for " + route.controller + "#" + route.action);
            return false;
        }

        url_param_count = route.path.match(/:([a-zA-Z]*)/g);
        patternSeed = route.path.replace(/:([a-zA-Z]*)/g, "(.*)") + "$";
        logger.verbose("\tMaking pattern from: " + patternSeed);
        pattern = new RegExp(patternSeed);

        match = request.url.split("?")[0].match(pattern) != null;

        if (match) {
            logger.verbose("Pattern: " + pattern + "  -> " + request.url + " -> " + route.controller + "#" + route.action);
            logger.verbose(request.url + "  -> " + route.controller + "#" + route.action);
            return true;
        } else {
            logger.verbose("request.url does not match path");
            return false;
        }
    }});
    

exports.router = Router;
