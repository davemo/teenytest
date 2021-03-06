var helper = require('./support/helper')
var assert = require('core-assert')

module.exports = function (cb) {
  helper.run('test/fixtures/multi-error.js', function (er, result, log) {
    assert.equal(result, false)
    log.assert(
      'TAP version 13',
      '1..3',
      'not ok 1 - "beforePlusAfter test" - test #1 in `test/fixtures/multi-error.js`',
      '  ---',
      '  message: A',
      /stacktrace: Error: A/,
      '  ...',
      '  ---',
      '  message: C',
      /stacktrace: Error: C/,
      '  ...',
      'not ok 2 - "afterRuinsIt foo test" - test #2 in `test/fixtures/multi-error.js`',
      '  ---',
      '  message: D',
      /stacktrace: Error: D/,
      '  ...',
      'not ok 3 - "testPlusAfter test" - test #3 in `test/fixtures/multi-error.js`',
      '  ---',
      '  message: E',
      /stacktrace: Error: E/,
      '  ...',
      '  ---',
      '  message: F',
      /stacktrace: Error: F/,
      '  ...'
    )
    cb(er)
  })
}

