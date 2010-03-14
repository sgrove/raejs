process.mixin(GLOBAL, 
              require('../lib/jzen_fn'),
              require('../lib/string_ext'),
              require('../lib/array_ext'),
              require('../lib/number_ext'),
              require('../lib/misc_utils'));

var sys = require('sys');
var http = require('http');
var router = require('./config/routes').router;
var logger = require('./lib/logger').logger;
var controllers = require('./lib/controllers').controllers;

http.createServer(function(request, response) {
    setTimeout(function(){
        try {
            response.sendHeader(200, {'Content-Type': 'text/plain'});
            routeRequest(request, response);
            response.close();
        } catch (ex) {
            logger.debug(ex.stack);
        }
    }, 500);
}).listen(8000);


var routeRequest = function(request, response) {
    logger.debug("Request received, routing...");
    var route = null;

    router.routes.each(function(target) {
        logger.debug(request.url + " == " + target.path);
        if (request.url.toString() == target.path &&
            request.method == target.method) route = target;
    });

    if (!route) return controllers.errors.not_found(request, response);

    // TODO: Probably don't need eval here
    logger.debug("controllers." + route.controller + "." + route.action + "(request, response)");
    eval("controllers." + route.controller + "." + route.action + "(request, response)");
};

logger.info('Server running at http://localhost:8000/');
logger.debug(doc(logger));
