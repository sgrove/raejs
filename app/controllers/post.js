// Posts controller
exports.controller = {
    index: function(request, response) {
        response.write("Here's a list of posts");
    },

    _new: function(request, response) {
        response.write("This is where you would make a new post");
    },

    create: function(request, response) {
        response.write("This is where you would create a post (shouldn't be a view)");
    },

    show: function(request, response) {
        response.write("This is where you would see a post");
    },

    edit: function(request, response) {
        response.write("This is where you would edit a post");
    },

    update: function(request, response) {
        response.write("This is where you would update a post (shouldn't be a view)");
    },

    destroy: function(request, response) {
        response.write("This is where you would destroy a post (shouldn't be a view)");
    }
}
