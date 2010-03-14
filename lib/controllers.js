fs = require('fs');
logger = require('./logger').logger;

logger.debug("Loading controllers....");

var controllers = {};
var controllers_path = "app/controllers/";

files = fs.readdir(controllers_path, function(err, files) {
    if (err) throw err;

    files.each(function(file) {
        logger.debug("Loading " + file);
        name = file.split(".")[0];

        // TODO: Get rid of lazy eval
        controller = require('../' + controllers_path + name).controller;
        eval("controllers." + name + " = require('../' + controllers_path + name).controller");

        return true;
    });
});

exports.controllers = controllers;
