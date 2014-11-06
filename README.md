Logy
---

Simple solution for console logging management tool with file names and line numbers.
---------------------------------------------------



It's simple.

You need to initiate Logy with .

    var logy = new Logy();


For now it has only have one method

    logy.log('Hello Logy');



If process.env.NODE_ENV === 'production', logy is silent. You can manually override this with logging option.

    var logy = new Logy({
        logging: false
        });

    ========== Logy ========
    Hello Logy!
        at Runner.runTest (/usr/lib/node_modules/mocha/lib/runner.js:373:10)
