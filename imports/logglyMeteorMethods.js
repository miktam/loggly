
/**
 * Meteor methods for Loggly
 */

 Meteor.methods({
   logglyLog: function(param, tag) {
     check(param, Match.OneOf(String, Object));
     check(tag, Match.OneOf([String], null));

     Logger.log(param, tag);
   },
   logglyTrace: function(param) {
     check(param, Match.OneOf(String, Object));

     Logger.trace(param);
   },
   logglyInfo: function(param) {
     check(param, Match.OneOf(String, Object));

     Logger.info(param);
   },
   logglyWarn: function(param) {
     check(param, Match.OneOf(String, Object));

     Logger.warn(param);
   },
   logglyError: function(param) {
     check(param, Match.OneOf(String, Object));

     Logger.error(param);
   }
 });
