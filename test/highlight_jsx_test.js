/**
 * Test case for highlightJsx.
 * Runs with nodeunit.
 */

var fs = require('fs'),
    highlightJsx = require('../lib/highlight_jsx.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Highlight jsx'] = function (test) {
    var src = require.resolve('../doc/mocks/mock-jsx.jsx');
    var highlighted = highlightJsx(
        fs.readFileSync(src).toString()
    );
    test.ok(highlighted);
    test.done();
};

