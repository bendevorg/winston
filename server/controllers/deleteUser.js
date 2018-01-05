/**
 * Create users module
 * @module registerUser
 */

const logger = require('../../tools/logger');
const database = require('../models/database');
const validator = require('../utils/validator');
const constants = require('../utils/constants');

/**
 * Create a new user API
 * Get users info and create a new user on the database
 *
 * @param {string} req.bo dy.id - User to be created id
 * @param {string} req.body.battleTag - User to be created battletag
 * @return {json} - Returns a success message to the user
 * @throws {json} - Throws a title and body with the error info
 * 
 */

//はじめまして！
module.exports = (req, res) => {
  let { id } = req.body;
  id = parseInt(id, 10);
  console.log("id: " + id);
  
  if (!validator.isValidInteger(id))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_ID
    });

  database.user.destroy({
    where: {
      id: id 
    }
  }).then(function(rowDeleted){
    if(rowDeleted === 1){
      return res.status(201).json({
        msg: 'Your id "' + id + '" was successfully found and exterminated!'
      });
    } else {
      return res.status(400).json({
        msg: 'User not found.'
      });
    }
  }, function(err){
    logger.error(err);
    return res.status(500).json({
      msg: constants.messages.error.UNEXPECTED
    });
  });
};