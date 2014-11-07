'use strict';
var util = require('util');

module.exports = Logy;

function Logy(options) {

    this.logging = process.env.NODE_ENV !== 'production';
    if(typeof options !== 'undefined'){
        if (typeof options.logging !== 'undefined')
            this.logging = options.logging;
    }
}

function log(){
    var callerLine = (new Error).stack.split("\n")[3],
        logs = Array.prototype.slice.call(arguments),
        colorizedLogs = [];
         logs.forEach(function () {
             colorizedLogs.push(util.inspect(provider, {
                 showHidden: true,
                 depth: 10,
                 colors: true,
                 stylize: true
             }));
         });
    console.log('========== Logy ========');
    console.log.apply(console, colorizedLogs);
    console.log(callerLine)
}
Logy.prototype.logging = true;
Logy.prototype.log = function () {
    if(this.logging)
        log.apply(console, Array.prototype.slice.call(arguments));
};


