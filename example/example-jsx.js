'use strict'

const apeHighlighting = require('ape-highlighting')
const fs = require('fs')

let highlighed = apeHighlighting.highlightJsx(
  fs.readFileSync(require.resolve('../jsx/some-jsx.jsx'))
)

console.log(highlighed)
