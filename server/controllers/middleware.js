/**
 * Middleware to access restricted APIs
 * @module controllers/middleware
 */

const apiKeyManager = require('./utils/apiKeyManager');
const validator = require('../utils/validator');
const constants = require('../utils/constants');
const database = require('../models/database');
const logger = require('../../tools/logger');

/**
 * Check if user`s token is valid
 *
 * @param {object} req.cookies - User`s token
 * @return {callback} - Calls the API
 * @throws {json} - Throws a title and body with the error info
 */
module.exports = function (req, res, next){
  const {API_KEY} = req.headers;
  if (!validator.isValidString(API_KEY)) return res.status(401).json({
      msg: constants.messages.error.NO_ACCESS_TO_API_KEY 
    });

  apiKeyManager.decryptApiKey(API_KEY)
    .then((userData) => {
      database.api_user.findById(userData.id)
        .then((apiUser) => {
          if (!apiUser) return res.status(401).json({
            msg: constants.messages.error.NO_ACCESS_TO_API_KEY 
          });
          req.apiUser = apiUser;
          next();
        })
        .catch((err) => {
          logger.error(err);
          return res.status(500).json({
            msg: constants.messages.error.UNEXPECTED
          });
        })
    })
    .catch((err) => {
      logger.error(err);
      return res.status(500).json({
        msg: constants.messages.error.UNEXPECTED
      });
    });
  let userData = apiKeyManager.decryptApiKey(API_KEY);
};