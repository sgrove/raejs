// TODO: Implement inheritance like Kevin was talking about.
var Product = jZenModel({
    standard_name: "Item",
    description:   "An item is a representation of a item in the grocery store, something that needs to be purchase.",
    todo:          ["Create a base Model class and have this inherit from it, including the db connections, etc.",
                    "Implement model validations. Not sure how to approach this with the inheritance and javascript stuff."],
    
    fields: {
        name: String,
        price: Number,
        expires_at: Date,
    },

    validations: [
        //validatesPresenceOf(name),
        //validatesPresenceOf(expires_at)
    ],
    
    body: function() {
        return {
            has_expired: function() {
                return this.expires_at < new Date();
            }}}});

exports.model = Product;
