process.mixin(GLOBAL, require('./jzen_fn'));

String.prototype.chomp = jZenFn(
    function(){
        return {
            standard_name: "String.prototype.chomp",
            description: "Removes newlines and carriages from strings",
            examples: ["'example\r\n'.chomp() -> 'example'"],
            
            body: function() { return this.replace(/\r\n$/, "");}
        };}());

String.prototype.ltrim = jZenFn(
    function(){
        return {
            standard_name: "String.prototype.ltrim",
            description: "Removes whitespace from the left-hand side of the string",
            examples: ["'          example'.ltrim() -> 'example'"],
            
            body: function() {
                var re = /\s*((\S+\s*)*)/;
                return this.replace(re, "$1");
            }};}());

String.prototype.rtrim = jZenFn(
    function(){
        return {
            standard_name: "String.prototype.rtrim",
            description: "Removes whitespace from the right-hand side of the string",
            examples: ["'example            '.rtrim() -> 'example'"],
            
            body: function() {
                var re = /((\s*\S+)*)\s*/;
                return value.replace(re, "$1");
            }};}());

String.prototype.trim = jZenFn(
    function(){
        return {
            standard_name: "string.prototype.trim",
            description: "Removes whitespace from both the left and right-hand sides of the string",
            examples: ["'            example            '.trim() -> 'example'"],
            
            body: function() {
                return this.rtrim().ltrim();
            }};}());
