/**
 * Test case for highlightJsx.
 * Runs with nodeunit.
 */
"use strict";

const fs = require('fs'),
    highlightJsx = require('../lib/highlight_jsx.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Highlight jsx'] = function (test) {
    let src = require.resolve('../doc/mocks/mock-jsx.jsx');
    let highlighted = highlightJsx(
        fs.readFileSync(src).toString()
    );
    test.ok(highlighted);
    test.done();
};


exports['From file'] = function (test) {
    let src = require.resolve('../doc/mocks/mock-jsx.jsx');
    let highlighted = highlightJsx.fromFile(src);
    test.ok(highlighted);
    test.done();
};

