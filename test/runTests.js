require('dotenv').config();

let testInfo = require('./utils/constants').urls;

//  Start tests
require('./auth/root')(testInfo);

require('./overbuff/topPick');

//  Close connections
require('./utils/closeApp')();