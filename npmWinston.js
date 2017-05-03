'use strict'

/*
// log example
const winston = require('winston');
winston.level = 'debug';
winston.info('Hello Tre\'');
winston.debug('Debugging information');
*/

/*
// color the log levels
const winston = require('winston');
const logger = new (winston.Logger)({
    transports:[
        // colorize the outpost to the console
        new (winston.transports.Console)({colorize:true})
    ]
});
logger.level = 'debug';
logger.info('Hello Tre\'');
logger.debug('Debugging information, 411');
*/

/*
// time stamp the logs
const winston = require('winston');
const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
    transports: [
        // colorize teh output to the console
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true
        })
    ]
});
logger.level = 'debug';
logger.info('Hello Tre\'');
logger.debug('Debugging info');
*/

/*
// log to file and console
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
// Create the log directory if it does not exist
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}
const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
    transports: [
        // colorize the output to the console
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level:'info'
        }),
        new (winston.transports.File)({
            filename: `${logDir}/results.log`,
            timestamp: tsFormat,
            level: env === 'development' ? 'debug' : 'info',
            maxsize:1000000 // in bytes
        })
    ]
});
logger.info('Hello Tre\'');
logger.warn('Warning message be-aware');
logger.debug('Debugging information');
*/

// log to MongoDB
var winston = require('winston');
require('winston-mongodb').MongoDB;

var tsFormat = () => (new Date()).toLocaleTimeString();
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.MongoDB)({
            db:'mongodb://trewaters:mlab-online@ds123361.mlab.com:23361/mlab-online'
            //,username:'trewaters' // not needed because it is in the URI
            //,password:'mlab-online' // not needed because it is in the URI
            ,collection:'winstonPost'
        }),
        new(winston.transports.Console)({
            timestamp: tsFormat,
            colorize:true
        })
    ]
});
logger.info('Hello Mlab. This is Tre\'');
logger.warn('Warning message, logging information into MongoDB');
logger.debug('Debugging information being stored in MongoDB on mLab');

/*
// DEBUG - I don't know what this code is doing. It doesn't work where I was trying to set it up with npm `debug`.

// configuration for winston
  var winston = require('winston');

  winston.log('info', 'Hello distributed log files!');
  winston.info('Hello again distributed logs');

  winston.level = 'debug';
  winston.log('debug', 'Now my debug messages are written to console!');

  winston.log('info', 'Hello log files!', {  
  someKey: 'some-value'
})

  winston.level = process.env.LOG_LEVEL
// END
*/