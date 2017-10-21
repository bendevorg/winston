require('dotenv').config();

let testInfo = require('./testInfo');

//  Auth test
require('./auth/root')(testInfo);