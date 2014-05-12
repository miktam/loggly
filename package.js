Package.describe({
  summary: 'Loggly client for Meteor'
});

Npm.depends({
  "loggly": "1.0.4"
});

Package.on_use(function (api, where) {
  api.add_files('loggly.js', 'server');
  api.export("Loggly", "server");
});



