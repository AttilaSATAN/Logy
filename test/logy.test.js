var Logy = require('../logy'),
    should = require('should');

describe('Logy ', function (){
   it('should be an intanceof Logy', function (done){
       var logy = new Logy();
       should(logy).be.instanceof(Logy);
       logy.log('Hello Logy!')
       done();
   })
});