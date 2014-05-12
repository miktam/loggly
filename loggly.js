var loggly = Npm.require('loggly');

Loggly = function(options) {
  this.client = loggly.createClient(options);
};

/**
 * Native wrapper for log method - just pass the arguments
 */
Loggly.prototype.log = function (param, tag) {
  this.client.log(param, tag);
}

/**
 * Set of useful methods to log with the tag
 *
 * @example: Loggly.warn("error message") will add tag `warn` to the `error message`
 */

Loggly.prototype._applyArguments = function (args, tag) {
  if (args && args.length == 1) {
    this.client.log(args[0], tag);
  } else {
    this.client.log(args, tag);
  }
}

Loggly.prototype.trace = function () {
  this._applyArguments(arguments, 'trace');
}

Loggly.prototype.info = function () {
  this._applyArguments(arguments, 'info');
}

Loggly.prototype.warn = function () {
  this._applyArguments(arguments, 'warn');
}

Loggly.prototype.error = function () {
  this._applyArguments(arguments, 'error');
}




