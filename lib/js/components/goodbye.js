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
      'h1',
      null,
      '\uD83D\uDC4B'
    ),
    _react2.default.createElement(
      'h5',
      null,
      'Call ended.'
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