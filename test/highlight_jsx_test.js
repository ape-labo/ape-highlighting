/**
 * Test case for highlightJsx.
 * Runs with mocha.
 */
'use strict'

const fs = require('fs')
const assert = require('assert')
const highlightJsx = require('../lib/highlight_jsx.js')

it('Highlight jsx', () => {
  let src = require.resolve('../doc/mocks/mock-jsx.jsx')
  let highlighted = highlightJsx(
    fs.readFileSync(src).toString()
  )
  assert.ok(highlighted)
})

it('From file', () => {
  let src = require.resolve('../doc/mocks/mock-jsx.jsx')
  let highlighted = highlightJsx.fromFile(src)
  assert.ok(highlighted)
})

