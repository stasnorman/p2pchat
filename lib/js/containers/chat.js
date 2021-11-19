'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _webrtcSwarm = require('webrtc-swarm');

var _webrtcSwarm2 = _interopRequireDefault(_webrtcSwarm);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _signalhub = require('signalhub');

var _signalhub2 = _interopRequireDefault(_signalhub);

var _roomEncoding = require('../lib/room-encoding');

var _media = require('../lib/media');

var _media2 = _interopRequireDefault(_media);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _myStream = require('../components/my-stream');

var _myStream2 = _interopRequireDefault(_myStream);

var _peerStreams4 = require('../components/peer-streams');

var _peerStreams5 = _interopRequireDefault(_peerStreams4);

var _invalidRoom = require('../components/invalid-room');

var _invalidRoom2 = _interopRequireDefault(_invalidRoom);

var _requestPerms = require('../components/request-perms');

var _requestPerms2 = _interopRequireDefault(_requestPerms);

var _setNickname = require('../components/set-nickname');

var _setNickname2 = _interopRequireDefault(_setNickname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIGNALHUB = 'https://signalhub.p2p.chat';

var Chat = function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    var roomName = void 0;
    var invalidRoom = false;

    try {
      roomName = (0, _roomEncoding.decodeRoom)(props.roomCode);
    } catch (e) {
      invalidRoom = true;
    }

    _this.state = {
      roomName: roomName,
      invalidRoom: invalidRoom,
      peerStreams: {},
      swarmInitialized: false,
      myUuid: (0, _v2.default)(),
      audioOn: true,
      videoOn: true,
      audioEnabled: true,
      videoEnabled: true
    };

    window.addEventListener('resize', _this.forceUpdate.bind(_this, function () {}));

    return _this;
  }

  _createClass(Chat, [{
    key: 'handleRequestPerms',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, myStream, audioEnabled, videoEnabled;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _media2.default)();

              case 2:
                _ref2 = _context.sent;
                myStream = _ref2.myStream;
                audioEnabled = _ref2.audioEnabled;
                videoEnabled = _ref2.videoEnabled;

                console.log({ audioEnabled: audioEnabled, videoEnabled: videoEnabled });
                this.setState({ initialized: true, myStream: myStream, audioEnabled: audioEnabled, videoEnabled: videoEnabled });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleRequestPerms() {
        return _ref.apply(this, arguments);
      }

      return handleRequestPerms;
    }()
  }, {
    key: 'handleSetNickname',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(nickname) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:

                this.setState({
                  nickname: nickname
                });

                this.connectToSwarm(nickname);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSetNickname(_x) {
        return _ref3.apply(this, arguments);
      }

      return handleSetNickname;
    }()
  }, {
    key: 'connectToSwarm',
    value: function connectToSwarm(nickname) {
      var _state = this.state,
          myUuid = _state.myUuid,
          myStream = _state.myStream;
      var roomCode = this.props.roomCode;


      var hub = (0, _signalhub2.default)(roomCode, [SIGNALHUB]);

      hub.subscribe('all').on('data', this.handleHubData.bind(this));

      var sw = (0, _webrtcSwarm2.default)(hub, {
        config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] },
        uuid: myUuid,
        wrap: function wrap(outgoingSignalingData, destinationSignalhubChannel) {
          outgoingSignalingData.fromNickname = nickname;
          return outgoingSignalingData;
        }
      });

      sw.on('peer', this.handleConnect.bind(this));

      sw.on('disconnect', this.handleDisconnect.bind(this));

      // Send initial connect signal
      hub.broadcast(roomCode, {
        type: 'connect',
        from: myUuid,
        fromNickname: nickname
      });
    }
  }, {
    key: 'handleHubData',
    value: function handleHubData(message) {
      var _this2 = this;

      var _state2 = this.state,
          swarmInitialized = _state2.swarmInitialized,
          myUuid = _state2.myUuid,
          peerStreams = _state2.peerStreams;


      if (!swarmInitialized) {
        this.setState({ swarmInitialized: true });
      }

      if (message.type === 'connect' && message.from !== myUuid) {

        if (!peerStreams[message.from]) {

          console.info('connecting to', { uuid: message.from, nickname: message.fromNickname });

          // Add the peer to the peerStreams with just his nickname so we can
          // show a placeholder whilst the peers finish handshaking
          var newPeerStreams = Object.assign({}, peerStreams);
          newPeerStreams[message.from] = { nickname: message.fromNickname };
          this.setState({ peerStreams: newPeerStreams });

          // If the peers never successfully finish handshaking and share
          // streams, clear up the peer
          setTimeout(function () {
            var peerStreams = _this2.state.peerStreams;


            if (peerStreams[message.from] && !peerStreams[message.from].connected) {
              var _newPeerStreams = Object.assign({}, peerStreams);
              delete _newPeerStreams[message.from];
              _this2.setState({ peerStreams: _newPeerStreams });
            }
          }, 20000);
        }
      }
    }
  }, {
    key: 'handleConnect',
    value: function handleConnect(peer, id) {
      var _this3 = this;

      var nickname = this.state.nickname;


      console.info('connected to a new peer:', { id: id, peer: peer });

      var peerStreams = Object.assign({}, this.state.peerStreams);
      var pkg = {
        peer: peer,
        audioOn: true,
        videoOn: true
      };
      peerStreams[id] = Object.assign({}, peerStreams[id], pkg);
      this.setState({ peerStreams: peerStreams });

      peer.on('stream', function (stream) {
        var peerStreams = Object.assign({}, _this3.state.peerStreams);
        console.info('received stream', stream);
        peerStreams[id].stream = stream;
        _this3.setState({ peerStreams: peerStreams });
      });

      peer.on('data', function (payload) {
        var _state3 = _this3.state,
            myStream = _state3.myStream,
            audioOn = _state3.audioOn,
            videoOn = _state3.videoOn,
            audioEnabled = _state3.audioEnabled,
            videoEnabled = _state3.videoEnabled;


        var data = JSON.parse(payload.toString());

        console.info('received data', { id: id, data: data });

        if (data.type === 'receivedHandshake') {
          if (myStream) {
            peer.addStream(myStream);
          }
          if (!audioOn || !audioEnabled) {
            peer.send(JSON.stringify({ type: 'audioToggle', enabled: false }));
          }
          if (!videoOn || !videoEnabled) {
            peer.send(JSON.stringify({ type: 'videoToggle', enabled: false }));
          }
        }

        if (data.type === 'sendHandshake') {
          var _peerStreams = Object.assign({}, _this3.state.peerStreams);
          _peerStreams[id].nickname = data.nickname;
          _peerStreams[id].connected = true;
          peer.send(JSON.stringify({ type: 'receivedHandshake' }));
          _this3.setState({ peerStreams: _peerStreams });
        }

        if (data.type === 'audioToggle') {
          var _peerStreams2 = Object.assign({}, _this3.state.peerStreams);
          _peerStreams2[id].audioOn = data.enabled;
          _this3.setState({ peerStreams: _peerStreams2 });
        }

        if (data.type === 'videoToggle') {
          var _peerStreams3 = Object.assign({}, _this3.state.peerStreams);
          _peerStreams3[id].videoOn = data.enabled;
          _this3.setState({ peerStreams: _peerStreams3 });
        }
      });

      peer.send(JSON.stringify({
        type: 'sendHandshake',
        nickname: nickname
      }));
    }
  }, {
    key: 'handleDisconnect',
    value: function handleDisconnect(peer, id) {

      console.info('disconnected from a peer:', id);

      var peerStreams = Object.assign({}, this.state.peerStreams);

      if (peerStreams[id] && peerStreams[id].stream) {
        delete peerStreams[id];
        this.setState({ peerStreams: peerStreams });
      }
    }
  }, {
    key: 'handleVideoToggle',
    value: function handleVideoToggle() {
      var _state4 = this.state,
          peerStreams = _state4.peerStreams,
          myStream = _state4.myStream,
          videoOn = _state4.videoOn;


      myStream.getVideoTracks()[0].enabled = !videoOn;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(peerStreams)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var id = _step.value;

          var peerStream = peerStreams[id];
          if (peerStream.connected) {
            peerStream.peer.send(JSON.stringify({ type: 'videoToggle', enabled: !videoOn }));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState({
        videoOn: !videoOn
      });
    }
  }, {
    key: 'handleAudioToggle',
    value: function handleAudioToggle() {
      var _state5 = this.state,
          peerStreams = _state5.peerStreams,
          myStream = _state5.myStream,
          audioOn = _state5.audioOn;


      myStream.getAudioTracks()[0].enabled = !audioOn;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(peerStreams)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var id = _step2.value;

          var peerStream = peerStreams[id];
          if (peerStream.connected) {
            peerStream.peer.send(JSON.stringify({ type: 'audioToggle', enabled: !audioOn }));
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.setState({
        audioOn: !audioOn
      });
    }
  }, {
    key: 'handleHangUp',
    value: function handleHangUp() {

      window.location = window.location.origin + '/goodbye';
    }
  }, {
    key: 'render',
    value: function render() {
      var created = this.props.created;
      var _state6 = this.state,
          nickname = _state6.nickname,
          invalidRoom = _state6.invalidRoom,
          roomName = _state6.roomName,
          initialized = _state6.initialized,
          myStream = _state6.myStream,
          swarmInitialized = _state6.swarmInitialized,
          peerStreams = _state6.peerStreams,
          audioOn = _state6.audioOn,
          videoOn = _state6.videoOn,
          audioEnabled = _state6.audioEnabled,
          videoEnabled = _state6.videoEnabled,
          noStream = _state6.noStream;


      if (invalidRoom) {
        return _react2.default.createElement(_invalidRoom2.default, null);
      }

      if (!initialized) {
        return _react2.default.createElement(_requestPerms2.default, {
          roomName: roomName,
          created: created,
          noStream: noStream,
          onRequestPerms: this.handleRequestPerms.bind(this)
        });
      }

      var awaitingPeers = Object.keys(peerStreams).length === 0;

      return _react2.default.createElement(
        'div',
        { id: 'chat' },
        !initialized && !nickname ? _react2.default.createElement(_requestPerms2.default, {
          roomName: roomName,
          created: created,
          onRequestPerms: this.handleRequestPerms.bind(this)
        }) : null,
        initialized && !nickname ? _react2.default.createElement(_setNickname2.default, {
          roomName: roomName,
          created: created,
          onSetNickname: this.handleSetNickname.bind(this)
        }) : null,
        initialized && nickname ? _react2.default.createElement(_header2.default, { roomName: roomName }) : null,
        initialized && nickname ? _react2.default.createElement(_peerStreams5.default, {
          peerStreams: peerStreams,
          swarmInitialized: swarmInitialized,
          shrunk: !swarmInitialized || awaitingPeers
        }) : null,
        initialized ? _react2.default.createElement(_myStream2.default, {
          stream: myStream,
          audioOn: audioOn,
          videoOn: videoOn,
          audioEnabled: audioEnabled,
          videoEnabled: videoEnabled,
          handleAudioToggle: this.handleAudioToggle.bind(this),
          handleVideoToggle: this.handleVideoToggle.bind(this),
          handleHangUp: this.handleHangUp.bind(this),
          expanded: !swarmInitialized || awaitingPeers
        }) : null
      );
    }
  }]);

  return Chat;
}(_react2.default.Component);

exports.default = Chat;