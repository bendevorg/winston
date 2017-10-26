module.exports = () => {
  describe('Close connections', () => {
    
    it('Close database', done => {
      /**
       * Close database connection. If we don`t do this the node
       * process will stay open. We don`t want that when testing.
       * TODO: Fix this with a more correct way
      */
      require('../../server/models/database').sequelize.close()
        .then(() => {
          done();
        })
        .catch(err => {
          /**
           * We can ignore this error for now since when this happens we may
           * have open connection from the tests and that is not really a problem.
          */
          done(err);
        });
    });
  });
}
  