require('dotenv').config();

//  Start tests
require('./auth/root');

//  Overbuff APIs
require('./overbuff/topPick');

// User registration
require('./register/registerUser');

//  Close connections
require('./utils/closeApp');
