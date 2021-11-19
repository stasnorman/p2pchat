'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFeather = require('react-feather');

var _awaitingPeers = require('./awaiting-peers');

var _awaitingPeers2 = _interopRequireDefault(_awaitingPeers);

var _initializingSwarm = require('./initializing-swarm');

var _initializingSwarm2 = _interopRequireDefault(_initializingSwarm);

var _peerStream = require('./peer-stream');

var _peerStream2 = _interopRequireDefault(_peerStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PeerStreams = function (_React$Component) {
  _inherits(PeerStreams, _React$Component);

  function PeerStreams(props) {
    _classCallCheck(this, PeerStreams);

    var _this = _possibleConstructorReturn(this, (PeerStreams.__proto__ || Object.getPrototypeOf(PeerStreams)).call(this, props));

    _this.state = {
      height: 0
    };
    return _this;
  }

  _createClass(PeerStreams, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.recalculateGrid();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.recalculateGrid();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _state = this.state,
          width = _state.width,
          height = _state.height;

      var _calculateNewDimensio = this.calculateNewDimensions(),
          newWidth = _calculateNewDimensio.newWidth,
          newHeight = _calculateNewDimensio.newHeight;

      var dimensionsChanged = width !== newWidth || height !== newHeight;

      return dimensionsChanged || (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'calculateNewDimensions',
    value: function calculateNewDimensions() {
      var _state2 = this.state,
          width = _state2.width,
          height = _state2.height;


      var newWidth = this.peerStreams.clientWidth;
      var newHeight = this.peerStreams.clientHeight;

      return { newWidth: newWidth, newHeight: newHeight };
    }
  }, {
    key: 'recalculateGrid',
    value: function recalculateGrid() {
      var _state3 = this.state,
          width = _state3.width,
          height = _state3.height;

      var _calculateNewDimensio2 = this.calculateNewDimensions(),
          newWidth = _calculateNewDimensio2.newWidth,
          newHeight = _calculateNewDimensio2.newHeight;

      if (newWidth !== width || newHeight !== height) {
        this.setState({ width: newWidth, height: newHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          peerStreams = _props.peerStreams,
          shrunk = _props.shrunk,
          swarmInitialized = _props.swarmInitialized;
      var _state4 = this.state,
          width = _state4.width,
          height = _state4.height;


      var rows = void 0,
          columns = void 0;

      var total = Object.keys(peerStreams).length;

      var x = Math.floor(Math.sqrt(total));
      var y = Math.ceil(total / x);

      // Switch rows/columns for tall screens (probably mobile)
      if (window.innerWidth < window.innerHeight) {
        columns = x;
        rows = y;
      } else {
        rows = x;
        columns = y;
      }

      var peerStreamsClassNames = (0, _classnames2.default)({ shrunk: shrunk });
      var peerStreamsStyle = {
        gridTemplateRows: 'repeat(' + rows + ', 1fr)',
        gridTemplateColumns: 'repeat(' + columns + ', 1fr)'
      };

      var cellWidth = width / columns;
      var cellHeight = height / rows;

      return _react2.default.createElement(
        'div',
        {
          id: 'peer-streams',
          ref: function ref(peerStreams) {
            _this2.peerStreams = peerStreams;
          },
          style: peerStreamsStyle,
          className: peerStreamsClassNames
        },
        !swarmInitialized ? _react2.default.createElement(_initializingSwarm2.default, null) : null,
        swarmInitialized && total === 0 ? _react2.default.createElement(_awaitingPeers2.default, null) : null,
        swarmInitialized && Object.keys(peerStreams).map(function (id) {
          return _react2.default.createElement(_peerStream2.default, {
            key: id,
            peerStream: peerStreams[id],
            cellWidth: cellWidth,
            cellHeight: cellHeight
          });
        })
      );
    }
  }]);

  return PeerStreams;
}(_react2.default.Component);

exports.default = PeerStreams;