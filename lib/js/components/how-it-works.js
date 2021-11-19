'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFeather = require('react-feather');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  return _react2.default.createElement(
    'div',
    { className: 'features how-it-works' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'h3',
        null,
        'How it works'
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'four columns' },
          _react2.default.createElement(
            'div',
            { className: 'feature' },
            _react2.default.createElement(
              'div',
              { className: 'feature-title' },
              'Create a room'
            ),
            _react2.default.createElement(_reactFeather.PlusSquare, { size: 35 }),
            _react2.default.createElement(
              'div',
              { className: 'feature-text' },
              'Choose a human-readable room name, such as the purpose of the meeting.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'four columns' },
          _react2.default.createElement(
            'div',
            { className: 'feature' },
            _react2.default.createElement(
              'div',
              { className: 'feature-title' },
              'Share the link'
            ),
            _react2.default.createElement(_reactFeather.Send, { size: 35 }),
            _react2.default.createElement(
              'div',
              { className: 'feature-text' },
              'Send the link to your guests via email, chat, or any other means.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'four columns' },
          _react2.default.createElement(
            'div',
            { className: 'feature' },
            _react2.default.createElement(
              'div',
              { className: 'feature-title' },
              'Chat!'
            ),
            _react2.default.createElement(_reactFeather.Video, { size: 35 }),
            _react2.default.createElement(
              'div',
              { className: 'feature-text' },
              'Chat to your guests over a secure, encrypted, peer-to-peer connection.'
            )
          )
        )
      )
    )
  );
};