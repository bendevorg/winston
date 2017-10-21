const chai = require('chai');
const supertest = require('supertest');

const expect = chai.expect;
const app = process.env.NODE_ENV == 'production'?require('../../tools/serverProduction'):require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = testInfo => {
  console.log(testInfo);
  describe('Auth use cases', () => {
    console.log(testInfo);
    
    it('Root access without api-key', done => {
      api
        .get('/api')
        .set(testInfo.users.noApiKey.header)
        .end(function(err, res){
          if (err){
            done(err);
          } else {
            expect(res.status, 'Status').to.equal(401);
            done();
          }
        });
    });
  
    it('Root access with invalid api-key', done => {
      api
        .get('/api')
        .set(testInfo.users.invalidApiKey.header)
        .end(function(err, res){
          if (err){
            done(err);
          } else {
            expect(res.status, 'Status').to.equal(401);
            done();
          }
        });
    });
  
    it('Root access with valid api-key', done => {
      api
        .get('/api')
        .set(testInfo.users.validApiKeyOne.header)
        .end(function(err, res){
          if (err){
            done(err);
          } else {
            expect(res.status, 'Status').to.equal(200);
            done();
          }
        });
    });
  });
}