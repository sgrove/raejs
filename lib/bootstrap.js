process.mixin(GLOBAL, 
              require('./fcg/jzen_fn'),
              require('./fcg/string_ext'),
              require('./fcg/object_ext'),
              require('./fcg/array_ext'),
              require('./fcg/number_ext'),
              require('./fcg/misc_utils'));

process.mixin(GLOBAL, require('./fcg/jzen_model'));

var sys = require('sys');
var http = require('http');
var router = require('../config/routes').router;
var config = require('../config/environment').config;
var logger = require('./logger').logger;
var db = require('./couchdb/lib/couchdb').createClient(5984, 'localhost').db(config.db_name);
var models = require('./models').models;
var controllers = require('./controllers').controllers;

exports.server = http.createServer(function(request, response) {
    setTimeout(function(){
        try {
            response.sendHeader(200, {'Content-Type': 'text/plain'});
            routeRequest(request, response);
            response.close();
        } catch (ex) {
            logger.debug(ex.stack);
            response.sendHeader(500, {'Content-Type': 'text/plain'});
            response.write(ex.stack);
            response.close();
        }
    }, 500);
}).listen(8000);

var routeRequest = function(request, response) {
    var route = null;

    // Reverse because we want urls at the top to eat the ones below
    router.routes.reverse().each(function(targetRoute) {
        logger.verbose(request.url + " == " + targetRoute.path);
        if (router.match(targetRoute, request)) {
            route = targetRoute;
            params = router.parseParams(targetRoute.path, request.url);
            minispect(params);
        }});

    if (!route) route = {controller: "errors", action: "not_found"};

    // TODO: Probably don't need eval here
    logger.debug(route.controller + "#" + route.action + " params { " + params + " (params object should be json encoded soon) }");

    return controllers[route.controller]["_" + route.action](request, response, params);
};

exports.config = config;
