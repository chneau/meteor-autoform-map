Package.describe({
  name: 'artemi:autoform-map',
  summary: 'Edit location coordinates with autoForm',
  version: '2.1.8',
  git: 'https://github.com/urnix/meteor-autoform-map'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');

  api.use([
  	'coffeescript',
  	'templating',
    'reactive-var',
  	'aldeed:autoform@6.2.0'
  ], 'client');

  api.imply([
    'dburles:google-maps@1.1.5'
  ], 'client');

  api.addFiles([
  	'lib/client/autoform-map.html',
    'lib/client/autoform-map.css',
  	'lib/client/autoform-map.coffee'
  ], 'client');
});
