'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadingIndicator = require('./loading-indicator');

var _loadingIndicator2 = _interopRequireDefault(_loadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  return _react2.default.createElement(
    'div',
    { id: 'initializing-swarm', className: 'hero container' },
    _react2.default.createElement(
      _loadingIndicator2.default,
      null,
      'Connecting'
    )
  );
};