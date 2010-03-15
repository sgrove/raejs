// Static controller
exports.controller = {
    _welcome: function(request, response) {
        response.write("Hey, just want to say welcome.");
    },

    _about: function(request, response, params) {
        response.write("About Raejs. Params: " + params );
    },

    _sandbox: function(request, response, params) {
        response.write("Raejs Sandbox. Params: " + params );
        response.write("id: " + params.id + ", action:" + params.action);
    }
}
