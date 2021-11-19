'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactFeather = require('react-feather');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyVideo = function (_React$Component) {
  _inherits(MyVideo, _React$Component);

  function MyVideo() {
    _classCallCheck(this, MyVideo);

    return _possibleConstructorReturn(this, (MyVideo.__proto__ || Object.getPrototypeOf(MyVideo)).apply(this, arguments));
  }

  _createClass(MyVideo, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateSrcObject();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateSrcObject();
    }
  }, {
    key: 'updateSrcObject',
    value: function updateSrcObject() {
      var _props = this.props,
          stream = _props.stream,
          videoOn = _props.videoOn,
          videoEnabled = _props.videoEnabled;


      console.log({ videoOn: videoOn, videoEnabled: videoEnabled });

      if (this.streamEle && videoOn && videoEnabled) {
        if ('srcObject' in this.streamEle) {
          this.streamEle.srcObject = stream;
        } else {
          // Older browsers don't support srcObject
          this.streamEle.src = URL.createObjectURL(stream);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          stream = _props2.stream,
          videoOn = _props2.videoOn,
          videoEnabled = _props2.videoEnabled;


      if (videoEnabled && videoOn) {
        return _react2.default.createElement('video', { ref: function ref(ele) {
            _this2.streamEle = ele;
          }, id: 'my-video', autoPlay: true, muted: true });
      } else {
        return _react2.default.createElement(_reactFeather.User, { className: 'no-video' });
      }
    }
  }]);

  return MyVideo;
}(_react2.default.Component);

exports.default = MyVideo;