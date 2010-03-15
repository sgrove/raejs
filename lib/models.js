fs = require('fs');
logger = require('./logger').logger;

logger.debug("Loading models....");

var models = {};
var models_path = "app/models/";

files = fs.readdir(models_path, function(err, files) {
    if (err) throw err;

    logger.debug("\tFiles: " + files);

    files.each(function(file) {
        logger.debug("\tLoading " + file);
        name = file.split(".")[0];

        // TODO: Get rid of lazy eval
        model = require('../' + models_path + name).controller;
        eval("models." + name + " = require('../' + models_path + name).model");

        return true;
    });
});

exports.models = models;
