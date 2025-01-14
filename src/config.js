const MAGIC_NUMS = {
  BSV: 'e3e1f3e8',
  BCH: 'e3e1f3e8',
  BTC: 'f9beb4d9',
  XEC: 'e3e1f3e8',
  'BSV-STN': 'fbcec4f9'
}

const VERSIONS = {
  BSV: 70015,
  BTC: 70015,
  BCH: 70015,
  XEC: 70015,
  'BSV-STN': 70015
}

const USER_AGENTS = {
  BSV: '/Bitcoin Atlas:1.0.0/',
  BTC: '/Bitcoin/',
  BCH: '/Bitcoin/',
  XEC: '/Bitcoin/',
  'BSV-STN': '/Bitcoin SV:0.2.2(EB10000.0)/'
}

const MAX_PER_MSG = 50000

module.exports = {
  MAGIC_NUMS,
  VERSIONS,
  USER_AGENTS,
  MAX_PER_MSG
}
