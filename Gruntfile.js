/*
 * grunt-pageshot
 * https://github.com/Glavin001/grunt-pageshot
 *
 * Copyright (c) 2014 Glavin Wiechert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    config: {
        port: 9001,
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Web Server, used for testing
    connect: {
      server: {
        options: {
          port: '<%= config.port %>',
          base: 'test'
        }
      }
    },

    // Configuration to be run (and then tested).
    pageshot: {
      /*
      default_options: {
        options: {
        }
      },
      */
      custom_options: {
        options: {
          url: 'http://localhost:<%= config.port %>/ticker.html',
          conf: 'test/ticker_conf.js',
          output: 'tmp'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'connect', 'pageshot', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
