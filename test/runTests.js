require('dotenv').config();

let testInfo = require('./testInfo');

//  Start tests
require('./auth/root')(testInfo);

//  Close connections
//require('./utils/closeConnection')();