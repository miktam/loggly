Package.describe({
  name: 'miktam:loggly',
  summary: 'Loggly for Meteor',
  version: '2.0.0',
  git: 'https://github.com/miktam/loggly/'
});

Npm.depends({
  'loggly': '1.0.8'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.1');
  api.use(['ecmascript', 'check']);

  api.mainModule('logglyClient.js', 'client');
  api.mainModule('logglyServer.js', 'server');

  api.export('Logger', 'client');
  api.export('Logger', 'server');
});
