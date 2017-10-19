/**
 * Middleware to access restricted APIs
 * @module controllers/middleware
 */

const tokenManager = require('./utils/tokenManager');
const validator = require('../utils/validator');
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
  if (!validator.isValidCookie(req.cookies)) return res.status(401).json({
      title: 'Not logged in',
      body: 'You are not logged in. Please login to perform this action.'
    });

  let token = tokenManager.decryptToken(req.cookies.session);
  if(!token || token == -1) return res.status(401).json({
      title: 'Not logged in',
      body: 'You are not logged in. Please login to perform this action.'
    });

  database.user.findById(token.id)
  .then((user) => {
    if (!user) return res.status(401).json({
        title: 'Not logged in',
        body: 'You are not logged in. Please login to perform this action.'
      });

    req.userInfo = user;
    next();
  })
  .catch((err) => {
    logger.error(err);
    return res.status(500).json({
      title: 'Unexpected error',
      body: 'An error occurred while checking your informations. Please try again later.'
    });
  });
};