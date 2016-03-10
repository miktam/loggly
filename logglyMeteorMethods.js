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
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    if (loggerSet()){
      Logger.log(param, tag);
    }
  },
  logglyTrace: function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    if (loggerSet()){
      Logger.trace(param, tag);
    }
  },
  logglyInfo: function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    if (loggerSet()){
      Logger.info(param, tag);
    }
  },
  logglyWarn:  function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    if (loggerSet()){
      Logger.warn(param, tag);
    }
  },
  logglyError:  function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    if (loggerSet()) {
      Logger.error(param, tag);
    }
  }
});
