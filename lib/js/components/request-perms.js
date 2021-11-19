'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var roomName = props.roomName,
      created = props.created,
      noStream = props.noStream,
      onRequestPerms = props.onRequestPerms;


  return _react2.default.createElement(
    'div',
    { id: 'request-perms', className: 'container' },
    _react2.default.createElement(
      'h3',
      null,
      created ? 'Creating ' : null,
      roomName
    ),
    !created ? _react2.default.createElement(
      'h5',
      null,
      'You are about to join a video call.'
    ) : null,
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'button-primary',
        onClick: onRequestPerms
      },
      'Allow mic/cam access'
    )
  );
};