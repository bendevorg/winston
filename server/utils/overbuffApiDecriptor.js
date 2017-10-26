/**
 * Module to decript overbuff API
 * @module utils/overbuffApiDecriptor.js
 */
const constants = require('./constants');

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
      let firstAcos = Math.acos(constants.overbuff.decriptor.FIRST_ACOS_MULTIPLIER 
        * encriptedData.length);
      encriptedData.replace(constants.overbuff.decriptor.NEWLINE_REGEX, '');

      let firstAsin = Math.asin(constants.overbuff.decriptor.FIRST_ASIN_MULTIPLER 
        * encriptedData.length * firstAcos);
      encriptedData.replace(constants.overbuff.decriptor.BRACKET_REGEX, '=');

      let secondAcos = Math.acos(constants.overbuff.decriptor.SECOND_ACOS_MULTIPLER 
        * encriptedData.length * firstAsin);
      encriptedData = encriptedData.split('').reverse().join('');

      let secondAsin = Math.asin(constants.overbuff.decriptor.SECOND_ASIN_MULTIPLER 
        * encriptedData.length * secondAcos);
      encriptedData = atob(encriptedData);
      let arrayData = encriptedData.split('');
      let decriptedData = stringReverse(arrayData);
      let test = JSON.parse(decriptedData);
      console.log(test);

    } catch (err){
      return reject(err);
    }   
  });
};