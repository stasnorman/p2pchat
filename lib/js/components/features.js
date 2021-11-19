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
    { className: 'features' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'h3',
        null,
        'Features'
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
              'Unique, secure rooms'
            ),
            _react2.default.createElement(_reactFeather.Shield, { size: 35 }),
            _react2.default.createElement(
              'div',
              { className: 'feature-text' },
              'Rooms are generated with a unique encrypted hash, making room links effectively unguessable.'
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
              'No limit on room size'
            ),
            _react2.default.createElement(_reactFeather.Users, { size: 35 }),
            _react2.default.createElement(
              'div',
              { className: 'feature-text' },
              'Invite as many people to the room as you want. The only limits are screen size and connection quality.'
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
              'End-to-end encryption'
            ),
            _react2.default.createElement(_reactFeather.Lock, { size: 35 }),
            _react2.default.createElement(
              'div',
              { className: 'feature-text' },
              'All video, audio and data is sent via an end-to-end encrypted connection using WebRTC.'
            )
          )
        )
      )
    )
  );
};