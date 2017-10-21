require('dotenv').config();

let testInfo = require('./testInfo');

//  Auth test
require('./auth/root')(testInfo);

//  Close Database connection
require('../server/models/database').sequelize.close();