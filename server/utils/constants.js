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
      INVALID_OVERBUFF_API_DATA: 'Api data sent by overbuff is invalid',
      INVALID_USER_DATA: 'An invalid user data was sent to gerenate an API key.',
      INVALID_API_KEY: 'An invalid api key was sent to decrypt it`s user token.',
      INVALID_NAME: 'The name sent is invalid.',
      INVALID_SOURCE: 'The source sent is invalid.',
      INVALID_ID: 'The id sent is invalid.',
      INVALID_BATTLETAG: 'The BattleTag sent is invalid.',
      EXISTING_USER: 'User already registered.'
    },
    success: {
      USER_REGISTERED: 'User registered.'
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
    NUMBER_OF_TOP_PICKED: 5,
    REQUEST_CONSTANT: '?v=14df061&group_hero=true',
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
    },
    heroes: {
      1001: 'Bastion',
      1002: 'Dva',
      1003: 'Genji',
      1004: 'Hanzo',
      1005: 'Junkrat',
      1006: 'Lúcio',
      1007: 'McCree',
      1008: 'Mei',
      1009: 'Mercy',
      1010: 'Pharah',
      1011: 'Reaper',
      1012: 'Reinhardt',
      1013: 'Roadhog',
      1014: 'Soldier: 76',
      1015: 'Symmetra',
      1016: 'Torbjörn',
      1017: 'Tracer',
      1018: 'Widowmaker',
      1019: 'Winston',
      1020: 'Zarya',
      1021: 'Zenyatta',
      1022: 'Ana',
      1023: 'Sombar',
      1024: 'Orisa',
      1025: 'Doomfist',
      1026: 'Moira'
    },
    PICK_INFOS: ['hero', 'pick_rate']
  }
};
