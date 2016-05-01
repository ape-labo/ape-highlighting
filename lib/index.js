/**
 * ape framework module for highlighting.
 * @module ape-highlighting
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get highlightJsx () { return d(require('./highlight_jsx')) }
}
