'use strict'

const React = require('react')
const RectDOM = require('react-dom')
const html = require('apeman-react-html')
const ApSlider = require('../../lib/ap_slider')
const ApSliderStyle = require('../../lib/ap_slider_style')

(function (window) {
  window.onload = function () {
    RectDOM.render(
      React.createElement(ApSlider, {
        step: 2,
        onChange: (v, ui) => {
          console.log('Value changed:', v)
        }
      }),
      document.getElementById('demo')
    )

    RectDOM.render(
      React.createElement(ApSliderStyle, {}),
      document.getElementById('demo-style')
    )
  }
})(window)