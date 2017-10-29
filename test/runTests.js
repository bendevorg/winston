require('dotenv').config();

let testInfo = require('./testInfo');

//  Start tests
require('./auth/root')(testInfo);

require('./overbuff/topPick');

//  Close connections
require('./utils/closeApp')();