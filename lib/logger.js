require('../../lib/jzen_fn');
var sys = require('sys');

exports.logger = jZenFn({
    standard_name: "Logger",
    description: "Master logging class. Use this to output log messages to the console, or redirect the output to another location, such as a file.",
    examples: ["logger.debug('debug information')", "logger.info('general information')", "logger.warn('potential problem')"],
    body: {
        DEBUG: 0,
        WARN: 1,
        INFO: 2,
        level: 0, // All output
        info: function(msg)  { if (this.level <= 2) this.output("INFO: "  + msg);},
        warn: function(msg)  { if (this.level <= 1) this.output("WARN: "  + msg);},
        debug: function(msg) { if (this.level == 0)  this.output("DEBUG: " + msg);},
        output: function(msg){ sys.puts(msg); }
    }
});
