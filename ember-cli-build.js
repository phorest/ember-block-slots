/* global require, module */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      implementation: require('node-sass'),
      includePaths: [
        'node_modules/ember-frost-core/addon/styles'
      ]
    },
    snippetSearchPaths: [
      'tests/dummy'
    ]
  })

  // app.import('bower_components/highlightjs/styles/github.css')

  return app.toTree()
}
