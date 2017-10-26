const overbuffApiDecriptor = require('../utils/overbuffApiDecriptor');
const request = require('request');
const logger = require('../../tools/logger');
const constants = require('../utils/constants');

module.exports = (req, res) => {

  let url = constants.urls.OVERBUFF_HEROES_INFO + constants.overbuff.request_constant;
  url += constants.overbuff.time.THIS_MONTH;
  url += constants.overbuff.platform.PC;
  url += constants.overbuff.game_mode.COMPETITIVE;

  request.get({url: url}, (err, httpResponse, body) => {
    if (err)
      return res.status(500).json({
        msg: constants.messages.error.OVERBUFF_API
      });

    overbuffApiDecriptor(body)
    .then((heroesInfo) => {
      return res.status(200).json({
        msg: heroesInfo
      });
    })
    .catch((err) => {
      logger.error(err);
      return res.status(500).json({
        msg: constants.messages.error.OVERBUFF_API
      });
    });
  });
};
