require('dotenv').config();

//  Start tests
require('./auth/root');

//require('./overbuff/topPick')(testInfo);

//  Close connections
require('./utils/closeApp');