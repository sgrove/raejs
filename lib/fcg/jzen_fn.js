exports.jZenFn = function(){
    zf = arguments[0].body || function(){};
    zf.description = arguments[0].description || "No documentation available";
    zf.examples = arguments[0].examples || ["No examples given"],
    zf.body_string = String(zf);
    zf.standard_name = arguments[0].standard_name || "unnamed";

    return zf;
};

exports.doc = exports.jZenFn(
    {standard_name: "doc",
     description: "Retrieves the jZen documentation for a given function.",
     examples: ["doc(Array.prototype.each)"],
     body: function(fn) {
         var newline = "\r\n";
         return fn.standard_name + ": " + fn.description + newline +
             "------" + newline +
             "Example Usage: " + fn.examples.join(", ") + newline +
             "------" + newline + "Source: " + fn.body_string;
     }});
