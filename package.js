Package.describe({
  name: 'chneau:autoform-map',
  summary: 'Edit location coordinates with autoForm',
  version: '2.1.9',
  git: 'https://github.com/chneau/meteor-autoform-map'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.2');

  api.use([
    'coffeescript@2.4.1',
    'templating@1.3.2',
    'reactive-var',
    'aldeed:autoform@6.3.0'
  ], 'client');

  api.imply([
    'epotek:google-maps@2.0.2'
  ], 'client');

  api.addFiles([
    'lib/client/autoform-map.html',
    'lib/client/autoform-map.css',
    'lib/client/autoform-map.coffee'
  ], 'client');
});
