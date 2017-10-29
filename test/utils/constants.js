module.exports = {
  users: {
    validApiKeyOne: {
      header: {
        'content-type': 'application/json',
        'api-key': process.env.TEST_API_KEY
      }
    },
    invalidApiKey: {
      header: {
        'content-type': 'application/json',
        'api-key': '12sadxzc1zxczxcasd123zxczxc23zxczxc'
      }
    },
    noApiKey: {
      'header': {
        'content-type': 'application/json'
      }
    }
  },
  urls: {
    PREFIX: '/api/',
    TOP_PICK: 'top_pick'
  }
};
