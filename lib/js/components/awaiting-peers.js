'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _copyLink = require('./copy-link');

var _copyLink2 = _interopRequireDefault(_copyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  return _react2.default.createElement(
    'div',
    { id: 'awaiting-peers', className: 'hero container' },
    _react2.default.createElement(
      'h3',
      null,
      'Waiting for peers...'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Share the link to start a video call'
    ),
    _react2.default.createElement(_copyLink2.default, null)
  );
};