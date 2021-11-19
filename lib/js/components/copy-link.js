'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyLink = function (_React$Component) {
  _inherits(CopyLink, _React$Component);

  function CopyLink(props) {
    _classCallCheck(this, CopyLink);

    var _this = _possibleConstructorReturn(this, (CopyLink.__proto__ || Object.getPrototypeOf(CopyLink)).call(this, props));

    _this.state = {
      copied: false
    };

    return _this;
  }

  _createClass(CopyLink, [{
    key: 'handleCopy',
    value: function handleCopy() {

      (0, _copyToClipboard2.default)(window.location.href);

      this.setState({
        copied: true
      });

      setTimeout(function () {
        this.setState({
          copied: false
        });
      }.bind(this), 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      var copied = this.state.copied;


      return _react2.default.createElement(
        'button',
        {
          className: 'invite button-primary',
          type: 'button',
          onClick: this.handleCopy.bind(this)
        },
        copied ? 'Copied!' : 'Copy link'
      );
    }
  }]);

  return CopyLink;
}(_react2.default.Component);

exports.default = CopyLink;