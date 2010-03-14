// Posts controller
exports.controller = {
    _index: function(request, response) {
        response.write("Here's a list of posts");
    },

    _new: function(request, response) {
        response.write("This is where you would make a new post");
    },

    _create: function(request, response) {
        response.write("This is where you would create a post (shouldn't be a view)");
    },

    _show: function(request, response) {
        response.write("This is where you would see a post");
    },

    _edit: function(request, response) {
        response.write("This is where you would edit a post");
    },

    _update: function(request, response) {
        response.write("This is where you would update a post (shouldn't be a view)");
    },

    _destroy: function(request, response) {
        response.write("This is where you would destroy a post (shouldn't be a view)");
    }
}
