/**
 * All project constants
 * @module utils/constants
*/
module.exports = {
  messages: {
    error: {
      NO_ACCESS_TO_API_KEY: 'You need a valid API key to access this feature.',
      UNEXPECTED: 'An unexpected error occurred while accessing our databases. Please try again.',
      INVALID_USER_DATA: 'An invalid user data was sent to gerenate an API key.',
      INVALID_API_KEY: 'An invalid api key was sent to decrypt it`s user token.',
      INVALID_NAME: 'The name sent is invalid.',
      INVALID_SOURCE: 'The source sent is invalid.'
    }
  },
  regex:{
    integer: /^-?\d+$/,
    battletag: /^\w{3,11}[^.*+?^${}()|\[\]\\]?#[0-9]{4,5}$/
  },
  urls: {
    OVERBUFF_HEROES_INFO: 'https://www.overbuff.com/tank/heroes',
    OVERBUFF_PLAYER_INFO: 'https://www.overbuff.com/players'
  },
  overbuff: {
    request_constant: '14df061',
    time: {
      THIS_WEEK: '1w',
      THIS_MONTH: '1m',
      THREE_MONTHS: '3m',
      SIX_MONTHS: '6m'
    },
    platform: {
      PC: 1,
      PSN: 2,
      XBOX: 3
    },
    game_mode: {
      QUICK_PLAY: 1,
      COMPETITIVE: 2
    },
    role: {
      ALL: 0,
      OFFENSE: 1,
      DEFENSE: 2,
      TANK: 3,
      SUPPORT: 4
    },
    skill_tier: {
      ALL: 0,
      BRONZE: 1,
      SILVER: 2,
      GOLD: 3,
      PLATINUM: 4,
      DIAMOND: 5,
      MASTER: 6,
      GRANDMASTER: 7
    },
    decriptor: {
      NEWLINE_REGEX: /(]|}|&|@|#|\$|\*)/g,
      BRACKET_REGEX: /\[/g
    }
  }
};
