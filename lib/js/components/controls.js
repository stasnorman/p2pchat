'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFeather = require('react-feather');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = function (_React$Component) {
  _inherits(Controls, _React$Component);

  function Controls(props) {
    _classCallCheck(this, Controls);

    var _this = _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this, props));

    window.addEventListener('mousemove', _this.handleInteraction.bind(_this));
    window.addEventListener('touchstart', _this.handleInteraction.bind(_this));

    _this.state = {
      showControls: true
    };

    return _this;
  }

  _createClass(Controls, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.handleInteraction();
    }
  }, {
    key: 'handleInteraction',
    value: function handleInteraction() {
      var _this2 = this;

      var interactionTimeoutHandle = this.state.interactionTimeoutHandle;


      clearTimeout(interactionTimeoutHandle);

      var timeoutHandle = setTimeout(function () {
        _this2.setState({
          showControls: false,
          interactionTimeoutHandle: null
        });
      }, 3000);

      this.setState({
        showControls: true,
        interactionTimeoutHandle: timeoutHandle
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          audioOn = _props.audioOn,
          videoOn = _props.videoOn,
          audioEnabled = _props.audioEnabled,
          videoEnabled = _props.videoEnabled,
          handleHangUp = _props.handleHangUp,
          handleVideoToggle = _props.handleVideoToggle,
          handleAudioToggle = _props.handleAudioToggle;
      var showControls = this.state.showControls;


      var videoClassNames = (0, _classnames2.default)('button-primary control', {
        on: videoOn
      });
      var audioClassNames = (0, _classnames2.default)('button-primary control', {
        on: audioOn
      });
      var controlsClassNames = (0, _classnames2.default)({ shown: showControls });

      return _react2.default.createElement(
        'div',
        { id: 'controls', className: controlsClassNames },
        _react2.default.createElement(
          'button',
          { className: videoClassNames, onClick: handleVideoToggle, disabled: !videoEnabled },
          videoOn && videoEnabled ? _react2.default.createElement(_reactFeather.Video, null) : _react2.default.createElement(_reactFeather.VideoOff, null)
        ),
        _react2.default.createElement(
          'button',
          { id: 'hang-up', className: 'button-primary control', onClick: handleHangUp },
          _react2.default.createElement(_reactFeather.X, null)
        ),
        _react2.default.createElement(
          'button',
          { className: audioClassNames, onClick: handleAudioToggle, disabled: !audioEnabled },
          audioOn && audioEnabled ? _react2.default.createElement(_reactFeather.Mic, null) : _react2.default.createElement(_reactFeather.MicOff, null)
        )
      );
    }
  }]);

  return Controls;
}(_react2.default.Component);

exports.default = Controls;