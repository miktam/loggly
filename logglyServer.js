
import './imports/logglyMeteorMethods.js';
var loggly = Npm.require('loggly');

Loggly = function(options) {
  this.client = loggly.createClient(options);
};

/**
 * Native wrapper for log method - just pass the arguments
 */
Loggly.prototype.log = function (param, tag) {
  this.client.log(param, tag);
};

/**
 * Set of useful methods to log with the tag
 *
 * @example: Loggly.warn("error message") will add tag `warn` to the `error message`
 */

Loggly.prototype._applyArguments = function (args, tag) {
  if (args && args.length === 1) {
    this.client.log(args[0], tag);
  } else {
    this.client.log(args, tag);
  }
};

Loggly.prototype.trace = function () {
  this._applyArguments(arguments, 'trace');
};

Loggly.prototype.info = function () {
  this._applyArguments(arguments, 'info');
};

Loggly.prototype.warn = function () {
  this._applyArguments(arguments, 'warn');
};

Loggly.prototype.error = function () {
  this._applyArguments(arguments, 'error');
};

// Create a default Logger object. Normally, this gets overwritten with the 'real'
// Logger. The purpose of this default Logger is preventing errors from being thrown
// on the server if there's no Logger created.
Logger = {};

Logger.log = function () {
  console.log('Logger object was not created on the Meteor Server');
};

Logger.trace = function () {
  console.log('Logger object was not created on the Meteor Server');
};

Logger.info = function () {
  console.log('Logger object was not created on the Meteor Server');
};

Logger.warn = function () {
  console.log('Logger object was not created on the Meteor Server');
};

Logger.error = function () {
  console.log('Logger object was not created on the Meteor Server');
};