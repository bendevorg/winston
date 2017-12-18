const overbuffApiDecriptor = require('../utils/overbuffApiDecriptor');
const request = require('request');
const logger = require('../../tools/logger');
const constants = require('../utils/constants');

module.exports = (req, res) => {

  let url = constants.urls.OVERBUFF_HEROES_INFO + constants.overbuff.REQUEST_CONSTANT;
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
        heroesInfo.sort((a, b) => {
          return a.pick_rate>=b.pick_rate?-1:1;
        });
        let topPickedHeroes = heroesInfo.slice(0, constants.overbuff.NUMBER_OF_TOP_PICKED);
        topPickedHeroes.forEach((heroInfo) => {
          for (key in heroInfo){
            console.log(key);
            if (!constants.overbuff.PICK_INFOS.includes(key)){
              delete heroInfo[key];
            }
          }
          heroInfo.hero = constants.overbuff.heroes[heroInfo.hero];
          heroInfo.pick_rate = Math.round(heroInfo.pick_rate * 10000)/100 + '%';
        });
        return res.status(200).json({
          msg: topPickedHeroes
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
