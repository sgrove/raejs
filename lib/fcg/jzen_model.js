// Fucking require system
fs = require('fs');
logger = require('../logger').logger;
logger.verbose("Loading model system (not models)");

jZenModel = function(){
    zm = jZenFn(arguments[0]);
    zm.fields = arguments[0].fields;
    zm.validations = arguments[0].validations

    zm.doc = jZenModel.doc(zm);

    return zm;
};

jZenModel.doc = jZenFn(
    {standard_name: "doc",
     description: "Retrieves the jZen documentation for a given model.",
     todo: ["Each field should read out it type.", "Each validation should describe itself.",
            "Make the output look nicer for godssake"],
     examples: ["Product.doc"],
     body: function(fn) {
         var newline = "\r\n";
         return fn.standard_name + ": " + fn.description + newline +
             "------" + newline + "Example Usage: " + fn.examples.join(", ")
             "------" + newline + ": " + fn.todo
             "------" + newline + "Fields: " + fn.fields + newline +
             "------" + newline + "Validations: " + fn.validations + newline +
             "------" + newline + "TODO: " + fn.todo + newline +
             "------" + newline + "Source: " + fn.body_string + newline;
     }});

exports.jZenModel = jZenModel
