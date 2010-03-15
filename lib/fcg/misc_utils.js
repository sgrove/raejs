var sys = require('sys');
exports.minispect = function(obj) {
    for (prop in obj) {
        sys.puts(prop + ": " + obj[prop]);
    }
}
