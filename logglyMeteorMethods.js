/***
 * loggerSet - checks to see if the Logger object has been created on server
 * @returns {boolean} - return true if the Logger object has been created on server
 */
var loggerSet = function () {
  if (typeof Logger !== 'undefined' && Logger !== null) {
    return true;
  }
  console.log('Logger object was not created on the Meteor Server');
  return false;
};

Meteor.methods({
  logglyLog: function(param, tag) {
    if (loggerSet()){
      Logger.log(param, tag);
    }
  },
  logglyTrace: function(param, tag) {
    if (loggerSet()){
      Logger.trace(param, tag);
    }
  },
  logglyInfo: function(param, tag) {
    if (loggerSet()){
      Logger.info(param, tag);
    }
  },
  logglyWarn:  function(param, tag) {
    if (loggerSet()){
      Logger.warn(param, tag);
    }
  },
  logglyError:  function(param, tag) {
    if (loggerSet()) {
      Logger.error(param, tag);
    }
  }
});
