'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFeather = require('react-feather');

var _loadingIndicator = require('./loading-indicator');

var _loadingIndicator2 = _interopRequireDefault(_loadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeerStream = function (_React$Component) {
  _inherits(PeerStream, _React$Component);

  function PeerStream(props) {
    _classCallCheck(this, PeerStream);

    var _this = _possibleConstructorReturn(this, (PeerStream.__proto__ || Object.getPrototypeOf(PeerStream)).call(this, props));

    _this.state = {
      videoWidth: null,
      videoHeight: null
    };
    return _this;
  }

  _createClass(PeerStream, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateSrcObject();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (!this.streamEle) {
        return;
      }

      this.streamEle.onloadedmetadata = function () {
        if (_this2.state.videoWidth !== null || _this2.state.videoHeight !== null) {
          return;
        }
        _this2.setState({
          videoWidth: _this2.streamEle.videoWidth,
          videoHeight: _this2.streamEle.videoHeight,
          videoReady: true
        });
      };

      this.updateSrcObject();
    }
  }, {
    key: 'updateSrcObject',
    value: function updateSrcObject() {
      var peerStream = this.props.peerStream;


      console.log({ videoOn: peerStream.videoOn, audioOn: peerStream.audioOn, streamEle: this.streamEle, stream: peerStream.stream });

      if (this.streamEle && peerStream.stream && (peerStream.videoOn || peerStream.audioOn)) {
        if ('srcObject' in this.streamEle) {
          this.streamEle.srcObject = peerStream.stream;
        } else {
          // Older browsers don't support srcObject
          this.streamEle.src = URL.createObjectURL(peerStream.stream);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          peerStream = _props.peerStream,
          cellWidth = _props.cellWidth,
          cellHeight = _props.cellHeight;
      var _state = this.state,
          videoReady = _state.videoReady,
          videoWidth = _state.videoWidth,
          videoHeight = _state.videoHeight;


      var cellAspectRatio = cellWidth / cellHeight;

      var videoAspectRatio = videoWidth / videoHeight;

      // Make placeholder a 4:3 black box
      var placeHolderWidth = void 0,
          placeHolderHeight = void 0;

      if (cellAspectRatio > 4 / 3) {
        placeHolderHeight = cellHeight;
        placeHolderWidth = cellHeight * 4 / 3;
      } else {
        placeHolderWidth = cellWidth;
        placeHolderHeight = cellWidth / 4 * 3;
      }

      var placeHolderStyle = {
        width: 'calc(' + placeHolderWidth + 'px - 2rem)',
        height: 'calc(' + placeHolderHeight + 'px - 2rem)'
      };

      var noVideoStyle = {
        width: 'calc(' + placeHolderWidth + 'px - 2rem)',
        height: 'calc(' + placeHolderHeight + 'px - 2rem)'
      };

      var videoStyle = {
        maxWidth: 'calc(' + cellWidth + 'px - 2rem)',
        maxHeight: 'calc(' + cellHeight + 'px - 2rem)'
      };

      if (videoReady) {
        if (videoAspectRatio < cellAspectRatio) {
          videoStyle.height = 'calc(' + cellHeight + 'px - 2rem)';
        } else {
          videoStyle.width = 'calc(' + cellWidth + 'px - 2rem)';
        }
      } else {
        videoStyle.display = 'none';
      }

      return _react2.default.createElement(
        'div',
        { className: 'peer-stream' },
        _react2.default.createElement(
          'div',
          { className: 'stream-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'stream-status' },
            _react2.default.createElement(
              'button',
              { className: 'nickname', disabled: true },
              peerStream.nickname
            ),
            peerStream.connected && !peerStream.audioOn ? _react2.default.createElement(_reactFeather.MicOff, { size: 18 }) : null
          ),
          peerStream.connected && !peerStream.videoOn ? _react2.default.createElement(
            'div',
            { className: 'peer-no-video', style: noVideoStyle },
            _react2.default.createElement(_reactFeather.User, null)
          ) : null,
          peerStream.videoOn ? _react2.default.createElement('video', {
            ref: function ref(ele) {
              _this3.streamEle = ele;
            },
            autoPlay: true,
            style: videoStyle
          }) : null,
          !peerStream.videoOn && peerStream.audioOn ? _react2.default.createElement('audio', {
            style: videoStyle,
            autoPlay: true,
            ref: function ref(ele) {
              _this3.streamEle = ele;
            }
          }) : null,
          !peerStream.connected ? _react2.default.createElement(
            'div',
            { className: 'video-placeholder', style: placeHolderStyle },
            _react2.default.createElement(_loadingIndicator2.default, null)
          ) : null
        )
      );
    }
  }]);

  return PeerStream;
}(_react2.default.Component);

exports.default = PeerStream;