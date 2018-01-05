const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const middleware = require('../controllers/middleware');
router.use(middleware);

const generateApiKey = require('../controllers/generateApiKey');
// TODO: Create a fs function to get all controllers

const registerUser = require('../controllers/registerUser');
const topPick = require('../controllers/topPick');
const deleteUser = require('../controllers/deleteUser');

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hi!' });
});

router.post('/create_api_key', generateApiKey);
router.post('/register', registerUser);
router.delete('/delete_user', deleteUser);
router.get('/top_pick', topPick);

module.exports = router;