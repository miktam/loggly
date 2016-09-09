Package.describe({
  name: 'miktam:loggly',
  summary: 'Loggly for Meteor',
  version: '1.1.1',
  git: 'https://github.com/miktam/loggly/'
});

Npm.depends({
  'loggly': '1.0.8'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');
  api.use(['check']);
  api.addFiles('logglyServer.js', 'server');
  api.addFiles('logglyMeteorMethods.js', 'server');
  api.addFiles('logglyClient.js', 'client');
  api.export('Loggly', 'server');
  api.export('Logger', 'client');
  api.export('Logger', 'server'); // Normally overwritten by users but handles cases of undefined Loggers on the server.
});
