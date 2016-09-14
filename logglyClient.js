
Logger = {};

Logger.log = function (param, tag) {
  Meteor.call('logglyLog', param, tag, function() {});
  if (Meteor.isDevelopment) console.log(param);
};

Logger.trace = function (param) {
  Meteor.call('logglyTrace', param, function() {});
  if (Meteor.isDevelopment) console.trace(param);
};

Logger.info = function (param) {
  Meteor.call('logglyInfo', param, function() {});
  if (Meteor.isDevelopment) console.info(param);
};

Logger.warn = function (param) {
  Meteor.call('logglyWarn', param, function() {});
  if (Meteor.isDevelopment) console.warn(param);
};

Logger.error = function (param) {
  Meteor.call('logglyError', param, function() {});
  if (Meteor.isDevelopment) console.error(param);
};
