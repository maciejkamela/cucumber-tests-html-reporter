'use strict';

var grunt = require('grunt');


exports.cucumber_tests_html_reporter = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/report.html');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.done();
  }
};
