# cucumber-tests-html-reporter

> Generate html report from JSON file returned by cucumber js json formatter

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install cucumber-tests-html-reporter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('cucumber-tests-html-reporter');
```

## The "cucumber-tests-html-reporter"

### Overview
**This is the same html reporter which can be found _[here](https://www.npmjs.com/package/grunt-protractor-cucumber-html-report "grunt-protractor-cucumber-html-report")_ but with a new look.**

In your project's Gruntfile, add a section named `cucumber-tests-html-reporter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cucumber_tests_html_reporter: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific options go here.
    },
  },
});
```
### Print screen examples
1. Main Page

![mainpage](./printScreens/main.png?raw=true "Main page")
2. Extended scenarios

![mainpage](./printScreens/extendedScenario.png?raw=true "Extended scenario")
3. Report chart with the basic statistics

![mainpage](./printScreens/chart.png?raw=true "Extended scenario")
### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  'cucumber-tests-html-reporter': {
    options: {
      dest: '.',
      output: 'report.html',
      testJSONResultPath: '',
      testJSONDirectory: '',
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
###### 0.0.1 Initial version.
###### 0.0.2 README tweaks.
