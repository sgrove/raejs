Array.prototype.each = jZenFn(
    function(){
        return {
            standard_name: "Array.prototype.each",
            description: "Iterates through each member in the array, passing it as an argument to a function. Returns a new array of the modified values.",
            examples: ["[1,2,3,4].each(fn(x){return x * 2;}) -> [2,4,6,8]"],
            body: function(fn) {
                new_array = [];
                for (var i = 0; i < this.length; i++) {
                    var value = fn(this[i]);
                    if (value) {
                        new_array.push();
                    } else {
                    }
                }
                return new_array;
            }
        };}());

Array.prototype.remove = jZenFn(
    function() {
        return {
            standard_name: "Array.prototype.remove",
            description: "Remove specific from the array. Returns a new copy of the modified array.",
            body: function(target) {
                new_array = [];
                for (var i = 0; i < this.length; i++)
                    if (target != this[i]) new_array.push(this[i]);

                return new_array;
            }};}());
