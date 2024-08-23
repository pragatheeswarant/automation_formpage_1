exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'pragatheeswarant_J7KUc8',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'GTroqMAJXhNMsqptzf7s',
  
    updateJob: false,
    specs: ['test/specs/test.learn.ts'],
    exclude: [],
    capabilities: [
        {
          browserName: 'Chrome',
          'bstack:options': {
            os: 'Windows',
            osVersion: '10',
            browserVersion: '120.0'}}
          ],
    logLevel: 'warn',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    hostname: 'hub.browserstack.com',
    services: [['browserstack']],
  
    // before: function () {
    //   var chai = require('chai');
    //   global.expect = chai.expect;
    //   chai.Should();
    // },
    framework: 'jasmine',
   
  };