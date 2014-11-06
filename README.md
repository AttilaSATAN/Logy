Logy
---

Simple solution for console logging management tool with file names and line numbers.
---------------------------------------------------



It's a simple console wrapper.

You need to initiate Logy with .

    var logy = new Logy();


For now it has only have one method

    logy.log('Hello Logy');



If process.env.NODE_ENV === 'production', logy is silent. You can manually override this with logging option.

    var logy = new Logy({
        logging: true
        });

    logy.log('Hello Logy');

    Hello Logy!
        at Context.<anonymous> (/home/lupus/Dev/Projects/Kişisel/logy/test/logy.test.js:8:13)
