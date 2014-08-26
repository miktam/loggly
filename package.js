Package.describe({
  summary: 'Loggly client for Meteor',
  version: '0.2.0'
});

Npm.depends({
  "loggly": "1.0.4"
});

Package.on_use(function (api, where) {
  api.add_files('loggly.js', 'server');
  api.export("Loggly", "server");
});



