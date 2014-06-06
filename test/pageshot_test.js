'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.pageshot = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  /*
  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  */
  custom_options: function (test) {
    test.expect(6);

    for (var i=1; i<6; i++) {
      test.ok(grunt.file.exists('tmp/screenshot'+i+'.png'), 'Screenshot '+i+' should have been created.');
    }

    test.ok(grunt.file.exists('tmp/quitting.png'), 'Last screenshot before quitting should have been created.');
    
    test.done();
  }
};
