/*
 * grunt-pageshot
 * https://github.com/Glavin001/grunt-pageshot
 *
 * Copyright (c) 2014 Glavin Wiechert
 * Licensed under the MIT license.
 */

'use strict';

var pageshot = require('pageshot');
var chalk = require('chalk');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pageshot', 'Automate your screenshots with Pageshot.', function () {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      url: '',
      conf: '',
      output: '',
      quite: false,
      viewportSize: {
        width: 480,
        height: 800
      }
    });

    var opts = {
      viewportSize: options.viewportSize
    };

    // Start Pageshot
    var p = pageshot(options.url, options.conf, options.output, opts);

    // Print out live events
    if (!options.quite) {
      p.on('didShoot', function(options, successful) {
        var title = '"' + options.name + '.' + options.format + '" with ' + options.quality + ' quality.';

        if (successful) {
          grunt.log.writeln(chalk.green('\n✔ ' + 'Successfully generated '+title));
        } else {
          grunt.log.writeln(chalk.red('\n✘ ' + 'Failed to generate '+title));
        }
      });
    }

    p.on('didQuit', function() {
      done();
    });

  });

};
