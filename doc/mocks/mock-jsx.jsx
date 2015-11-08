"use strict";

var React = require('react'),
    RectDOM = require('react-dom'),
    html = require('apeman-react-html'),
    ApSlider = require('../../lib/ap_slider'),
    ApSliderStyle = require('../../lib/ap_slider_style');

(function (window) {
    window.onload = function () {
        RectDOM.render(
            React.createElement(ApSlider, {
                    step: 2,
                    onChange: (v, ui) => {
                    console.log('Value changed:', v);
    }
}),
    document.getElementById('demo')
);

RectDOM.render(
    React.createElement(ApSliderStyle, {}),
    document.getElementById('demo-style')
);
};
})(window);