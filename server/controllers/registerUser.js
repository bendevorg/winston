/**
 * Create users module
 * @module registerUser
 */

const logger = require('../../tools/logger');
const database = require('../models/database');
const validator = require('../utils/validator');

/**
 * Create a new user API
 * Get users info and create a new user on the database
 *
 * @param {string} req.body.id - User to be created id
 * @param {string} req.body.battleTag - User to be created battletag
 * @return {json} - Returns a success message to the user
 * @throws {json} - Throws a title and body with the error info
 * 
 */
module.exports = (req, res) => {
  let { id, battleTag } = req.body;

  if (!validator.isValidInteger(id))
    return res.status(400).json({
      title: 'Invalid id format',
      body: 'Id must be a valid integer.'
    });

  if (!validator.isValidBattleTag(battleTag))
    return res.status(400).json({
      title: 'Invalid BattleTag',
      body: 'Invalid BattleTag format.'
    });

  id = id.trim();
  battleTag = battleTag.trim();

  database.user.findById(id).then(existingUser => {
    if (existingUser)
      return res.status(400).json({
        title: 'User already registered',
        body: 'This user has already been registered with this id.'
      });

    let newUser = database.user.build({ ...id, ...battleTag });
    newUser
      .save()
      .then(() => {
        return res.status(201).json({
          msg: 'User registered'
        });
      })
      .catch(err => {
        logger.error(err);
        return res.status(500).json({
          title: 'Unexpected error',
          body:
            'An error occurred while saving your information. Please try again later.'
        });
      });
  });
};
