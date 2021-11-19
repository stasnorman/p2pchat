'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  return _react2.default.createElement(
    'div',
    { className: 'container hero' },
    _react2.default.createElement(
      'h1',
      null,
      'No-nonsense video calls.'
    ),
    _react2.default.createElement(
      'h5',
      null,
      'No logins. No tracking. Free forever.'
    )
  );
};