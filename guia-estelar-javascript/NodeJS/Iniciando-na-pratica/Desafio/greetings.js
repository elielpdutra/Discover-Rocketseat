const getFlag = require('./flags.js');

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`)