'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getMediaStream = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', navigator.mediaDevices.getUserMedia(opts));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getMediaStream(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var video, audio, stream, _stream, _stream2;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            video = {
              facingMode: "user",
              width: { min: 640, ideal: 1280, max: 1920 },
              height: { min: 360, ideal: 720, max: 1080 },
              frameRate: { ideal: 15, max: 24 }
            };
            audio = {
              autoGainControl: true,
              sampleRate: { ideal: 48000, min: 35000 },
              echoCancellation: true,
              channelCount: { ideal: 1 }
            };
            _context2.prev = 2;

            // Try and get video and audio
            console.log('try video and audio');
            _context2.next = 6;
            return getMediaStream({ video: video, audio: audio });

          case 6:
            stream = _context2.sent;
            return _context2.abrupt('return', { myStream: stream, audioEnabled: true, videoEnabled: true });

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](2);

            console.error(_context2.t0);
            _context2.prev = 13;

            console.log('try just audio');
            // If that fails, try just audio
            _context2.next = 17;
            return getMediaStream({ audio: audio });

          case 17:
            _stream = _context2.sent;
            return _context2.abrupt('return', { myStream: _stream, audioEnabled: true, videoEnabled: false });

          case 21:
            _context2.prev = 21;
            _context2.t1 = _context2['catch'](13);

            console.error(_context2.t1);
            _context2.prev = 24;

            console.log('try just video');
            // If that fails, try just video
            _context2.next = 28;
            return getMediaStream({ video: video });

          case 28:
            _stream2 = _context2.sent;
            return _context2.abrupt('return', { myStream: _stream2, audioEnabled: false, videoEnabled: true });

          case 32:
            _context2.prev = 32;
            _context2.t2 = _context2['catch'](24);
            return _context2.abrupt('return', { myStream: null, audioEnabled: false, videoEnabled: false });

          case 35:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 10], [13, 21], [24, 32]]);
  }));

  function getMyStream() {
    return _ref2.apply(this, arguments);
  }

  return getMyStream;
}();