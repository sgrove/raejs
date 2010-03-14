// Errors controller
exports.controller = {
    not_found: function(request, response) {
        response.status = 404;
        response.write("404 ERROR: I'm not sure what you're looking for");
    }
}
