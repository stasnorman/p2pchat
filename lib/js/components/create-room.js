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

var CreateRoom = function (_React$Component) {
  _inherits(CreateRoom, _React$Component);

  function CreateRoom(props) {
    _classCallCheck(this, CreateRoom);

    var _this = _possibleConstructorReturn(this, (CreateRoom.__proto__ || Object.getPrototypeOf(CreateRoom)).call(this, props));

    _this.state = {
      roomValue: ''
    };

    return _this;
  }

  _createClass(CreateRoom, [{
    key: 'onChange',
    value: function onChange(evt) {

      this.setState({
        roomValue: this.slugify(evt.target.value)
      });
    }
  }, {
    key: 'onCreateRoom',
    value: function onCreateRoom(text) {
      var onCreateRoom = this.props.onCreateRoom;


      var roomName = this.cleanSlug(text);

      var roomCode = (0, _roomEncoding.encodeRoom)(roomName);

      onCreateRoom(roomCode);
    }
  }, {
    key: 'slugify',
    value: function slugify(text) {

      return text.replace(/[^-a-zA-Z0-9\s+]+/ig, '') // Remove all non-word chars
      .replace(/\s+/gi, "-") // Replace all spaces with dashes
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .toLowerCase();
    }
  }, {
    key: 'cleanSlug',
    value: function cleanSlug(text) {

      return text.replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var roomValue = this.state.roomValue;


      return _react2.default.createElement(
        'div',
        { id: 'create-room', className: 'container' },
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              e.preventDefault();_this2.onCreateRoom(roomValue);
            } },
          _react2.default.createElement('input', {
            type: 'text',
            placeholder: 'e.g. engineering standup',
            value: this.state.roomValue,
            onChange: function onChange(evt) {
              return _this2.onChange(evt);
            },
            required: true,
            minLength: '3'
          }),
          _react2.default.createElement(
            'button',
            {
              type: 'submit',
              className: 'button-primary'
            },
            'Create Room'
          )
        )
      );
    }
  }]);

  return CreateRoom;
}(_react2.default.Component);

exports.default = CreateRoom;