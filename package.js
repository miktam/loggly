Package.describe({
  name: 'avrora:loggly',
  summary: 'Loggly for Meteor',
  version: '0.3.0',
  git: 'https://github.com/avrora/loggly/'
});

Npm.depends({
  'loggly': '1.0.8'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.4');
  api.addFiles('logglyServer.js', 'server');
  api.addFiles('logglyMeteorMethods.js', 'server');
  api.addFiles('logglyClient.js', 'client');
  api.export('Loggly', 'server');
  api.export('Logger', 'client'); //Logger Object needs to be created on server side
});



