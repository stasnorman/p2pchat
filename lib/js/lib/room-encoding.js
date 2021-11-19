'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeRoom = exports.encodeRoom = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _shorthash = require('shorthash');

var _shorthash2 = _interopRequireDefault(_shorthash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRoomHash(key, roomName) {
  return _shorthash2.default.unique('' + key + roomName);
}

function encodeRoom(roomName) {

  var key = (+new Date()).toString(36).slice(-5);
  var hash = getRoomHash(key, roomName);
  var roomCode = '' + key + hash + '/' + roomName;

  return roomCode;
}

function decodeRoom(roomCode) {

  try {

    var key = roomCode.substr(0, 5);

    var _roomCode$slice$split = roomCode.slice(5).split('/'),
        _roomCode$slice$split2 = _slicedToArray(_roomCode$slice$split, 2),
        hash = _roomCode$slice$split2[0],
        roomName = _roomCode$slice$split2[1];

    var computedHash = getRoomHash(key, roomName);

    if (hash !== computedHash) {
      throw 'Bad room hash';
    }

    return roomName;
  } catch (e) {

    console.error(e);
    throw 'Invalid room code';
  }
}

exports.encodeRoom = encodeRoom;
exports.decodeRoom = decodeRoom;