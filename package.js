'use strict';

Package.describe({
    name: 'pcuci:autoform-select-uncheckable-radio',
    summary: 'Radio buttons that can be unselected',
    version: '0.0.3',
    github: 'https://github.com/pcuci/autoform_select_uncheckable_radio.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');

    api.use('templating');
    api.use('aldeed:autoform@5.4.1');
    api.use('aldeed:template-extension@3.4.3');

    api.use([
      'underscore',
      'coffeescript'
    ], 'client');

    api.addFiles([
        'autoform_select_uncheckable_radio.html',
        'autoform_select_uncheckable_radio.coffee',
    ], 'client');
});
