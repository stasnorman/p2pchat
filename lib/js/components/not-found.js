'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  return _react2.default.createElement(
    'div',
    { className: 'hero container' },
    _react2.default.createElement(
      'h3',
      null,
      '404 - Page not found'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Oops - this page doesn\'t exist!'
    ),
    _react2.default.createElement(
      'a',
      {
        href: '/',
        className: 'button button-primary home-button'
      },
      'Home'
    )
  );
};