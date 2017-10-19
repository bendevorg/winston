const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const generateApiKey = require('../controllers/generateApiKey');
// TODO: Create a fs function to get all controllers

//  Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({msg: 'Hi!'});
});

router.post('/create_api_key', generateApiKey);

module.exports = router;