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
        this.routes.push({path: route.path, controller: route.controller, action: route.action});
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
         ["GET",  prefix + "/new", "new"],     // new
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

exports.router = Router;
