Object.prototype.inspect = function(level) {
    if (!level) {
         level = 1;
    }
    output = "";
    for (prop in this) {
        if (typeof this[prop] == "object") {
            if (this[prop]) {
            output += this[prop].inspect(level + 1);                
            }
        } else {
            level.times(function(){ output += "\t";});
            if (typeof prop == "function") {
                output += prop + " (function) ";
            } else {
                output += prop + ":  " + this[prop].toString();
            }
        }
    }

    return output;
}

Object.prototype.clone = function(obj) {
    var clone = {};
    clone.prototype = obj.prototype;
    for (property in obj) clone[property] = obj[property];
    return clone;
};
