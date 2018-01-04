/**
 * Create users module
 * @module registerUser
 */

// const logger = require('../../tools/logger');
// const database = require('../models/database');
// const validator = require('../utils/validator');
// const constants = require('../utils/constants');

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

module.exports = (req, res) => {
  return res.status(400).json({
    msg: 'hajimemashite'
  //return "はじめまして！";
  });
};

// module.exports = (req, res) => {
//   let { id, battleTag } = req.body;
  
//   if (!validator.isValidInteger(id))
//     return res.status(400).json({
//       msg: constants.messages.error.INVALID_ID
//     });

//   if (!validator.isValidBattleTag(battleTag))
//     return res.status(400).json({
//       msg: constants.messages.error.INVALID_BATTLETAG
//     });

//   id = parseInt(id, 10);
//   battleTag = battleTag.trim();
  
//   database.user
//     .findById(id)
//     .then(existingUser => {
//       if (existingUser)
//         return res.status(400).json({
//           msg: constants.messages.error.EXISTING_USER
//         });

//       let newUser = database.user.build({ id, battleTag });
//       newUser
//         .save()
//         .then(() => {
//           return res.status(201).json({
//             msg: constants.messages.success.USER_REGISTERED
//           });
//         })
//         .catch(err => {
//           logger.error(err);
//           return res
//             .status(500)
//             .json({ msg: constants.messages.error.UNEXPECTED });
//         });
//     })
//     .catch(err => {
//       logger.error(err);
//       return res.status(500).json({ msg: constants.messages.error.UNEXPECTED });
//     });
// };
