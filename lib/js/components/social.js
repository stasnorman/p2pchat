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
    { id: 'social' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        { className: 'button', id: 'tweet', href: 'http://twitter.com/share?url=https://p2p.chat&text=p2p.chat', target: '_blank' },
        _react2.default.createElement('i', null),
        _react2.default.createElement(
          'span',
          null,
          'Tweet'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('iframe', {
        src: 'https://ghbtns.com/github-btn.html?user=tom-james-watson&repo=p2p.chat&type=star&count=true',
        scrolling: '0',
        width: '80',
        height: '20'
      })
    )
  );
};