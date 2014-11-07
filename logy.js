'use strict';



function Logy(options) {

    this.logging = process.env.NODE_ENV !== 'production';
    if(typeof options !== 'undefined'){
        if (typeof options.logging !== 'undefined')
            this.logging = options.logging;
    }
}

function log(){
    var callerLine = (new Error).stack.split("\n")[3];
    console.log('========== Logy ========');
    console.log.apply(console, Array.prototype.slice.call(arguments));
    console.log(callerLine)
}
Logy.prototype.logging = true;
Logy.prototype.log = function () {
    if(this.logging)
        log.apply(console, Array.prototype.slice.call(arguments));
};


module.exports = Logy;