Meteor.methods({
  logglyLog: function(param, tag) {
    check(tag,Match.OneOf([String],null));
    check(param, Match.OneOf(String, Object));

    Logger.log(param, tag);
  },
  logglyTrace: function(param, tag) {
    check(tag,Match.OneOf([String],null));
    check(param, Match.OneOf(String, Object));

    Logger.trace(param, tag);
  },
  logglyInfo: function(param, tag) {
    check(tag,Match.OneOf([String],null));
    check(param, Match.OneOf(String, Object));

    Logger.info(param, tag);
  },
  logglyWarn:  function(param, tag) {
    check(tag,Match.OneOf([String],null));
    check(param, Match.OneOf(String, Object));

    Logger.warn(param, tag);
  },
  logglyError:  function(param, tag) {
    check(tag,Match.OneOf([String],null));
    check(param, Match.OneOf(String, Object));

    Logger.error(param, tag);
  }
});
