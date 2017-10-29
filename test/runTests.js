require('dotenv').config();

//  Start tests
require('./auth/root');

//  Overbuff APIs
require('./overbuff/topPick');

//  Close connections
require('./utils/closeApp');