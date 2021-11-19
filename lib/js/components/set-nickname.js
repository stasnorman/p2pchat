'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _roomEncoding = require('../lib/room-encoding');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetNickname = function (_React$Component) {
  _inherits(SetNickname, _React$Component);

  function SetNickname(props) {
    _classCallCheck(this, SetNickname);

    var _this = _possibleConstructorReturn(this, (SetNickname.__proto__ || Object.getPrototypeOf(SetNickname)).call(this, props));

    _this.state = {
      nickname: ''
    };

    return _this;
  }

  _createClass(SetNickname, [{
    key: 'onChange',
    value: function onChange(evt) {

      this.setState({
        nickname: evt.target.value
      });
    }
  }, {
    key: 'onSetNickname',
    value: function onSetNickname(nickname) {
      var onSetNickname = this.props.onSetNickname;


      nickname = nickname.replace(/\s\s+/g, ' ');
      nickname = nickname.trim();

      onSetNickname(nickname);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          roomName = _props.roomName,
          created = _props.created;
      var nickname = this.state.nickname;


      return _react2.default.createElement(
        'div',
        { id: 'set-nickname', className: 'container' },
        _react2.default.createElement(
          'h3',
          null,
          created ? 'Creating ' : null,
          roomName
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Set a nickname:'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              e.preventDefault();_this2.onSetNickname(nickname);
            } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              type: 'text',
              placeholder: 'e.g. tom',
              value: this.state.roomValue,
              onChange: function onChange(evt) {
                return _this2.onChange(evt);
              },
              required: true,
              minLength: '3'
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              {
                type: 'submit',
                className: 'button-primary'
              },
              'Join Video Call'
            )
          )
        )
      );
    }
  }]);

  return SetNickname;
}(_react2.default.Component);

exports.default = SetNickname;