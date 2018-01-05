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

// module.exports = (req, res) => {
//   let { id } = req.body;
//   console.log(id);

//   Model.destroy({
//     where: {
//         // criteria
//     }
//   })

//   return res.status(400).json({
//     msg: 'hajimemashite'
//   //return "はじめまして！";
//   });
// };

module.exports = (req, res) => {
  let { id } = req.body;
  id = parseInt(id, 10);
  console.log("id: " + id);
  
  if (!validator.isValidInteger(id))
    return res.status(400).json({
      msg: constants.messages.error.INVALID_ID
    });

  // database.user.findById(id).then((user) => {
  //   return res.status(201).json({
  //     msg: user.battleTag
  //   });
  // });
  

  database.user.destroy({
    where: {
      id: id //this will be your id that you want to delete
    }
  }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    if(rowDeleted === 1){
      console.log('Deleted successfully');
      return res.status(201).json({
        msg: 'Your id "' + id + '" was successfully found and exterminated!'
      });
    } else {
      return res.status(201).json({
        msg: 'Telegram ID not found.'
      });
    }
  }, function(err){
    console.log(err);
    return res.status(400).json({
      msg: 'failed for some reason.'
    });
  });

  

  // database.user
  //   .findById(id)
  //   .then(existingUser => {
  //     if (existingUser)
  //       return res.status(400).json({
  //         msg: constants.messages.error.EXISTING_USER
  //       });

  //     let newUser = database.user.build({ id, battleTag });
  //     newUser
  //       .save()
  //       .then(() => {
  //         return res.status(201).json({
  //           msg: constants.messages.success.USER_REGISTERED
  //         });
  //       })
  //       .catch(err => {
  //         logger.error(err);
  //         return res
  //           .status(500)
  //           .json({ msg: constants.messages.error.UNEXPECTED });
  //       });
  //   })
  //   .catch(err => {
  //     logger.error(err);
  //     return res.status(500).json({ msg: constants.messages.error.UNEXPECTED });
  //   });
};
