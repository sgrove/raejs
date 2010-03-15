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
        type: "Product"
    },

    validations: [
        //validatesPresenceOf(name),
        //validatesPresenceOf(expires_at)
    ],
    
    body: function() {

        function Product(doc) {
            for (prop in this.fields) {
                this[prop] = doc[prop];
            }
        };
        
        return {
            find: function(id) {
                doc = db.getDoc(id, function(err, doc) {
                    if (err) throw err;
                });
                return new Product(id);
            },
            has_expired: function() {
                return this.expires_at < new Date();
            }}}});

exports.model = Product;
