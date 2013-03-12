var assert = require('assert'),
    ipint = require('../lib/ipint.js');

assert.equal(ipint.ipToInt('174.36.207.186'), 2921648058);
assert.equal(ipint.intToIp(2921648058), '174.36.207.186');
