Logger = {};

Logger.log = function (param, tag) {
  Meteor.call('logglyLog', param, tag, function() {});
};

Logger.trace = function (param) {
  Meteor.call('logglyTrace', param, function() {});
};

Logger.info = function (param) {
  Meteor.call('logglyInfo', param, function() {});
};

Logger.warn = function (param) {
  Meteor.call('logglyWarn', param, function() {});
};

Logger.error = function (param) {
  Meteor.call('logglyError', param, function() {});
};
