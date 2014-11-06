'use strict';



function Logy(options) {

    this.logging = process.env.NODE_ENV !== 'production';
}
Logy.prototype.log = function () {
    var caller_line = (new Error).stack.split("\n")[4];
    console.log('========== Logy : \n');
    console.log.apply(console, Array.prototype.slice.call(arguments));
    console.log(caller_line)
}

module.exports = Logy;