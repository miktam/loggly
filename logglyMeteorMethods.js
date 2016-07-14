Meteor.methods({
  logglyLog: function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    Logger.log(param, tag);
  },
  logglyTrace: function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    Logger.trace(param, tag);
  },
  logglyInfo: function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    Logger.info(param, tag);
  },
  logglyWarn:  function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    Logger.warn(param, tag);
  },
  logglyError:  function(param, tag) {
    check(param,Object);
    check(tag,Match.OneOf([String],null));

    Logger.error(param, tag);
  }
});
