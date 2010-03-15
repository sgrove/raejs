var sys = require('sys');

var jZenFn = function(){
    zf = arguments[0].body || function(){};
    zf.body_string = String(zf);

    zf.standard_name = arguments[0].standard_name || "unnamed";
    zf.description = arguments[0].description || "No documentation available";
    zf.examples = arguments[0].examples || ["No examples given"],
    zf.todo = arguments[0].todo || ["Nothing todo"],
    zf.doc = jZenFnDoc(zf);

    return zf;
};

// Define a plain function first to bootstrap
var jZenFnDoc = function(fn) {
         var newline = "\r\n";
         return fn.standard_name + ": " + fn.description + newline +
             "------" + newline + "Example Usage: " + fn.examples.join(", ") + newline +
             "------" + newline + "TODO: " + fn.todo + newline +
             "------" + newline + "Source: " + fn.body_string;
     };

// Redefine a jZenFn
var jZenFnDoc = jZenFn(
    {standard_name: "doc",
     description: "Retrieves the jZen documentation for a given function.",
     examples: ["doc(Array.prototype.each)"],
     body: jZenFnDoc});

exports.jZenFn = jZenFn;
