/*
 * cucumber-tests-html-reporter
 * https://github.com/maciejkamela/cucumber-tests-html-reporter
 *
 * Copyright (c) 2015 Hilscher, Robert, Kamela, Maciej
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'lib/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporterOutput: ""
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    'cucumber-tests-html-reporter': {
      default_options: {
        options: {
          dest: 'tmp',
          output: 'report.html',
          testJSONDirectory: 'assets',
          reportTitle: "Cucumber tests output"
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'templates/assets/css/style.css': '_sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: '_sass/*.scss',
        tasks: ['sass']
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'sass', 'cucumber-tests-html-reporter', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'clean', 'sass', 'cucumber-tests-html-reporter']);
};
