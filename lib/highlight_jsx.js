/**
 * @function highlightJsx
 * @param {string} src - Source string.
 * @param {object} options - Optional settings.
 * @returns {string} - Highlighted string.
 */

'use strict'

const argx = require('argx'),
    nsh = require('node-syntaxhighlighter'),
    jsx = require('jsx-syntaxhighlighter'),
    fs = require('fs');

/** @lends highlightJsx */
function highlightJsx(src, options) {
    let args = argx(arguments);
    let style = highlightJsx.style();
    options = args.pop('object');
    return [
        '<div>',
        '<style scoped="scoped">' + style + '</style>',
        nsh.highlight(src, jsx, {gutter: false}
        ),
        '</div>'
    ].join('');
}

highlightJsx.style = function () {
    let filename = nsh.getStyles()[0].sourcePath;
    return fs.readFileSync(filename).toString();
};

highlightJsx.fromFile = function (filename, options) {
    let src = fs.readFileSync(filename).toString();
    return highlightJsx(src, options);
}
module.exports = highlightJsx;
