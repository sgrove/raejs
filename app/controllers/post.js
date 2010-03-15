// Posts controller
exports.controller = {
    _index: function(request, response, params) {
        response.write("Here's a list of posts");
    },

    _new: function(request, response, params) {
        response.write("This is where you would make a new post");
    },

    _create: function(request, response, params) {
        response.write("This is where you would create a post (shouldn't be a view)");
    },

    _show: function(request, response, params) {
        // params.hidef should be a GET variable -> i.e. "/post/:id?hidef=sure"
        response.write("This is where you would see post with id = " + params.id + ", you said you want to see it in hidef? " + params.hidef);
    },

    _edit: function(request, response, params) {
        response.write("This is where you would edit a post");
    },

    _update: function(request, response, params) {
        response.write("This is where you would update a post (shouldn't be a view)");
    },

    _destroy: function(request, response, params) {
        response.write("This is where you would destroy a post (shouldn't be a view)");
    }
}
