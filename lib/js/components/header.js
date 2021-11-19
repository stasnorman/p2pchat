'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFeather = require('react-feather');

var _copyLink = require('./copy-link');

var _copyLink2 = _interopRequireDefault(_copyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var roomName = props.roomName;


  return _react2.default.createElement(
    'div',
    { id: 'chat-header' },
    _react2.default.createElement(
      'a',
      { id: 'brand', href: '/' },
      _react2.default.createElement(_reactFeather.Share2, { id: 'brand-logo' }),
      _react2.default.createElement(
        'span',
        { id: 'brand-text' },
        'p2p.chat'
      )
    ),
    roomName ? _react2.default.createElement(
      'span',
      { id: 'room-name' },
      roomName
    ) : null,
    roomName ? _react2.default.createElement(_copyLink2.default, null) : null
  );
};