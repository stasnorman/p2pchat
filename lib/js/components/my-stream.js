'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var stream = props.stream,
      audioOn = props.audioOn,
      videoOn = props.videoOn,
      audioEnabled = props.audioEnabled,
      videoEnabled = props.videoEnabled,
      handleHangUp = props.handleHangUp,
      handleVideoToggle = props.handleVideoToggle,
      handleAudioToggle = props.handleAudioToggle,
      expanded = props.expanded;


  var myStreamClassNames = (0, _classnames2.default)({ expanded: expanded });

  return _react2.default.createElement(
    'div',
    { id: 'my-stream', className: myStreamClassNames },
    _react2.default.createElement(_myVideo2.default, { stream: stream, videoOn: videoOn, videoEnabled: videoEnabled }),
    _react2.default.createElement(_controls2.default, {
      audioOn: audioOn,
      videoOn: videoOn,
      audioEnabled: audioEnabled,
      videoEnabled: videoEnabled,
      handleAudioToggle: handleAudioToggle,
      handleVideoToggle: handleVideoToggle,
      handleHangUp: handleHangUp
    })
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _controls = require('./controls');

var _controls2 = _interopRequireDefault(_controls);

var _myVideo = require('./my-video');

var _myVideo2 = _interopRequireDefault(_myVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }