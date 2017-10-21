const chai = require('chai');
const supertest = require('supertest');
const faker = require('faker');

const expect = chai.expect;
const app = process.env.NODE_ENV == 'production'?require('../../../serverProduction'):require('../../../serverDevelopment');
const api = supertest(app);

module.exports = testInfo => {
  describe('Auth use cases', () => {
    
    it('Root access without api-key', done => {
      api
        .get('/api')
        .set(testInfo.noApiKey.header)
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
        .set(testInfo.invalidApiKey.header)
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
        .set(testInfo.validApiKeyOne.header)
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