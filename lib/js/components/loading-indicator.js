'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var children = props.children;


  return _react2.default.createElement(
    'div',
    { className: 'loading-indicator' },
    _react2.default.createElement('div', { className: 'loading-inner' }),
    children ? _react2.default.createElement(
      'div',
      { className: 'loading-text' },
      children
    ) : null
  );
};