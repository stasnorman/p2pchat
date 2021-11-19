"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _chat = require("./chat");

var _chat2 = _interopRequireDefault(_chat);

var _createRoom = require("../components/create-room");

var _createRoom2 = _interopRequireDefault(_createRoom);

var _header = require("../components/header");

var _header2 = _interopRequireDefault(_header);

var _hero = require("../components/hero");

var _hero2 = _interopRequireDefault(_hero);

var _social = require("../components/social");

var _social2 = _interopRequireDefault(_social);

var _howItWorks = require("../components/how-it-works");

var _howItWorks2 = _interopRequireDefault(_howItWorks);

var _features = require("../components/features");

var _features2 = _interopRequireDefault(_features);

var _footer = require("../components/footer");

var _footer2 = _interopRequireDefault(_footer);

var _goodbye = require("../components/goodbye");

var _goodbye2 = _interopRequireDefault(_goodbye);

var _terms = require("../components/terms");

var _terms2 = _interopRequireDefault(_terms);

var _privacy = require("../components/privacy");

var _privacy2 = _interopRequireDefault(_privacy);

var _notFound = require("../components/not-found");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    var pathname = window.location.pathname;

    // We are rewriting all routes through to the index, but we can grab the
    // intended route from the URL.

    if (/^\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/.test(pathname)) {
      // Paths that match this are valid room codes.
      var roomCode = pathname.slice(1);

      // If we created the room ourselves, there'll be a ?created=true
      var queryParams = _queryString2.default.parse(window.location.search);
      var created = queryParams.created;

      // Clean params from URL
      window.history.replaceState(null, null, "" + window.location.origin + pathname);

      _this.state = {
        route: "chat",
        roomCode: roomCode,
        created: created
      };
    } else if (pathname === "/") {
      _this.state = {
        route: "home"
      };
    } else if (pathname === "/goodbye") {
      _this.state = {
        route: "goodbye"
      };
    } else if (pathname === "/terms-and-conditions") {
      _this.state = {
        route: "terms-and-conditions"
      };
    } else if (pathname === "/privacy-policy") {
      _this.state = {
        route: "privacy-policy"
      };
    } else {
      _this.state = {
        route: "404"
      };
    }
    return _this;
  }

  _createClass(Home, [{
    key: "handleCreateRoom",
    value: function handleCreateRoom(roomCode) {
      // As we have no router, just do a full navigate - we'll pick up the room
      // from the url on load.
      window.location = window.location.origin + "/" + roomCode + "?created=true";
    }
  }, {
    key: "renderHome",
    value: function renderHome() {
      return _react2.default.createElement(
        "div",
        { id: "home" },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_hero2.default, null),
        _react2.default.createElement(_createRoom2.default, { onCreateRoom: this.handleCreateRoom.bind(this) }),
        _react2.default.createElement(_social2.default, null),
        _react2.default.createElement(_howItWorks2.default, null),
        _react2.default.createElement(_features2.default, null),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }, {
    key: "renderChat",
    value: function renderChat() {
      var _state = this.state,
          roomCode = _state.roomCode,
          created = _state.created;

      return _react2.default.createElement(_chat2.default, { roomCode: roomCode, created: created });
    }
  }, {
    key: "renderGoodbye",
    value: function renderGoodbye() {
      return _react2.default.createElement(_goodbye2.default, null);
    }
  }, {
    key: "renderTerms",
    value: function renderTerms() {
      return _react2.default.createElement(_terms2.default, null);
    }
  }, {
    key: "renderPrivacy",
    value: function renderPrivacy() {
      return _react2.default.createElement(_privacy2.default, null);
    }
  }, {
    key: "render404",
    value: function render404() {
      return _react2.default.createElement(_notFound2.default, null);
    }
  }, {
    key: "render",
    value: function render() {
      var route = this.state.route;


      var pages = {
        home: this.renderHome,
        chat: this.renderChat,
        goodbye: this.renderGoodbye,
        "terms-and-conditions": this.renderTerms,
        "privacy-policy": this.renderPrivacy,
        404: this.render404
      };

      return pages[route].bind(this)();
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;