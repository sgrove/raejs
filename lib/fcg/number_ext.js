Number.prototype.times = jZenFn(
    function() {
        return {
            description: "Execute function fn n times",
            standard_name: "Number.prototype.times",
            examples: ["3.times(fn(){alert('hi!');));"],
            body: function(fn) {
                for (var i = 0; i < this; i++) {
                    fn(i);
                    };
            }
        };
    }());
