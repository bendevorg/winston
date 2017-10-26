/**
 * All project constants
 * @module utils/constants
*/
module.exports = {
  messages: {
    error: {
      NO_ACCESS_TO_API_KEY: 'You need a valid API key to access this feature.',
      UNEXPECTED: 'An unexpected error occurred while accessing our databases. Please try again.',
      OVERBUFF_API: 'Error accessing overbuff`s API.',
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
    request_constant: '?v=14df061&group_hero=true',
    time: {
      THIS_WEEK: '&time=1w',
      THIS_MONTH: '&time=1m',
      THREE_MONTHS: '&time=3m',
      SIX_MONTHS: '&time=6m'
    },
    platform: {
      PC: '&platform=1',
      PSN: '&platform=2',
      XBOX: '&platform=3'
    },
    game_mode: {
      QUICK_PLAY: '&game_mode=1',
      COMPETITIVE: '&game_mode=2'
    },
    role: {
      OFFENSE: '&role=1',
      DEFENSE: '&role=2',
      TANK: '&role=3',
      SUPPORT: '&role=4'
    },
    skill_tier: {
      BRONZE: '&skill_tier=1',
      SILVER: '&skill_tier=2',
      GOLD: '&skill_tier=3',
      PLATINUM: '&skill_tier=4',
      DIAMOND: '&skill_tier=5',
      MASTER: '&skill_tier=6',
      GRANDMASTER: '&skill_tier=7'
    },
    decriptor: {
      NEWLINE_REGEX: /(]|}|&|@|#|\$|\*)/g,
      BRACKET_REGEX: /\[/g
    }
  }
};
