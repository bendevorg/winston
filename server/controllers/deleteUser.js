/**
 * Delete users module
 * @module deleteUser
 */

const logger = require('../../tools/logger');
const database = require('../models/database');
const validator = require('../utils/validator');
const constants = require('../utils/constants');

/**
 * Create a new user API
 * Get users ID and removes from the DB
 *
 * @param {string} req.body.id - Users ID to be removed from DB
 * @return {json} - Returns a success message to the user
 * @throws {json} - Throws a title and body with the error info
 * 
 */

//はじめまして！
module.exports = (req, res) => {
  let { id } = req.body;
  id = parseInt(id, 10);  
  if (!validator.isValidInteger(id))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_ID
    });

  database.user.destroy({
    where: {
      id: id 
    }
  }).then(rowDeleted => {
    if(rowDeleted){
      return res.status(200).json({
        msg: constants.messages.success.USER_DELETED
      });
    } else {
      return res.status(400).json({
        msg: constants.messages.error.USER_NOT_FOUND
      });
    }
  }, function(err){
    logger.error(err);
    return res.status(500).json({
      msg: constants.messages.error.UNEXPECTED
    });
  });
};