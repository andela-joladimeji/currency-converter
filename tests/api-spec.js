var mocha = require('mocha'),
supertest = require('supertest'),
chai = require('chai'),
expect = chai.expect,
assert = chai.assert,
apiJs = require('../api.js')
request = supertest(apiJs);

console.log('in specs');
describe('api.js test', function(){
  it('should return data', function(){
      expect(apiJs.getRates).to.not.be.Null;
  });
  it('should return an array', function(){
    expect((apiJs.getRates).isArray).to.be.True;
  })

});