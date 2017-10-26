/**
 * Module to decript overbuff API
 * @module utils/overbuffApiDecriptor.js
 */
const constants = require('./constants');
const atob = require('atob');

/**
 * Overbuff decriptor
 * Use to decript info received from overbuff crazy API
 *
 * @param {object} encriptedData - Api data
 * @return {string} - Array with heroes info
 * @throws {object} - Returns err that indicates a fail
 * 
 */
module.exports = function(encriptedData){
  return new Promise((resolve, reject) => {
    try {
    
      encriptedData.replace(constants.overbuff.decriptor.NEWLINE_REGEX, '');
      encriptedData.replace(constants.overbuff.decriptor.BRACKET_REGEX, '=');
      let decriptedData = atob(encriptedData.split('').reverse().join('')).split('');
      return resolve(JSON.parse(decriptedData.reverse().join('')));

    } catch (err){
      return reject(err);
    }   
  });
};