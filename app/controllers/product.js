// Products controller
exports.controller = {
    _index: function(request, response, params) {
        response.write("Here's a list of products");
    },

    _new: function(request, response, params) {
        response.write("This is where you would make a new product");
        product = Product.find(params['id']);
        response.write("This document's name is " + product.name);
    },

    _create: function(request, response, params) {
        response.write("This is where you would create a product (shouldn't be a view)");
    },

    _show: function(request, response, params) {
        // params.hidef should be a GET variable -> i.e. "/product/:id?hidef=sure"
        response.write("This is where you would see product with id = " + params.id + ", \nyou said you want to see it in hidef? " + params.hidef);
    },

    _edit: function(request, response, params) {
        response.write("This is where you would edit a product");
    },

    _update: function(request, response, params) {
        response.write("This is where you would update a product (shouldn't be a view)");
    },

    _destroy: function(request, response, params) {
        response.write("This is where you would destroy a product (shouldn't be a view)");
    }
}
