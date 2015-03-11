Logger = {};

Logger.log = function (param, tag) {
  Meteor.call('logglyLog', param, tag, function() {});
};

Logger.trace = function (param, tag) {
  Meteor.call('logglyTrace', param, tag, function() {});
};

Logger.info = function (param, tag) {
  Meteor.call('logglyInfo', param, tag, function() {});
};

Logger.warn = function (param, tag) {
  Meteor.call('logglyWarn', param, tag, function() {});
};

Logger.error = function (param, tag) {
  Meteor.call('logglyError', param, tag, function() {});
};
