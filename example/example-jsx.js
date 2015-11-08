var apeHighlighting = require('ape-highlighting'),
    fs = require('fs');

var highlighed = apeHighlighting.highlightJsx(
    fs.readFileSync(require.resolve('../jsx/some-jsx.jsx'))
);

console.log(highlighed);
