/**
 * @function highlightJsx
 * @param {string} src - Source string.
 * @param {object} options - Optional settings.
 * @returns {string} - Highlighted string.
 */

"use strict";

var argx = require('argx'),
    nsh = require('node-syntaxhighlighter'),
    jsx = require('jsx-syntaxhighlighter'),
    fs = require('fs');

/** @lends highlightJsx */
function highlightJsx(src, options) {
    var args = argx(arguments);
    var style = highlightJsx.style();
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
    var filename = nsh.getStyles()[0].sourcePath;
    return fs.readFileSync(filename).toString();
};

module.exports = highlightJsx;
