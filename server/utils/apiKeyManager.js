/**
 * Module to gerenate and decrypt API Keys
 * @module utils/tokenManager
 */
const crypto = require('crypto-js');
const logger = require('../../tools/logger');

/**
 * User's api encrypt and decrypt key
 * @readonly
 * @const {string}
 */
const apiSecretKey = process.env.API_KEY_ENCRYPTATION;

/**
 * Generates a encrypted api key
 * Receive user's information and generate a new api key
 *
 * @param {object} userData - User data
 * @return {string} - Returns a encryptated hash that will be used as the user`s API KEY
 * @throws {object} - Returns err that indicates a fail
 * 
 */
exports.generateApiKey = function(userData){
  return new Promise((resolve, reject) => {
    try {
      if(!userData) return -1;
      let apiKey = crypto.AES.encrypt(JSON.stringify(userData), apiSecretKey).toString();
      return apiKey;  
    } catch (err){
      logger.error(err);
      return reject(err);
    }   
  });
};

/**
 * Ecrypt an encrypted api key
 * Receive an api key and return the user data of that api key
 *
 * @param {string} apiKey - Users`s api Key
 * @return {object} - Returns all the user`s data inside the api key
 * @throws {object} - Returns -1 that indicates a fail
 * 
 */
exports.decryptApiKey = function(apiKey){
  return new Promise((resolve, reject) => {
    try {
      let userDataInBytes = crypto.AES.decrypt(apiKey, apiSecretKey);
      let userData = JSON.parse(userDataInBytes.toString(crypto.enc.Utf8));
      return userData;
    } catch (err) {
      logger.error(err);
      return -1;
    }     
  });   
};