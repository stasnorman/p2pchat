"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    { id: "footer" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "h5",
          null,
          "Contact"
        ),
        _react2.default.createElement(
          "p",
          null,
          "For any help or feedback, please contact",
          " ",
          _react2.default.createElement(
            "a",
            { href: "mailto:support@p2p.chat" },
            "support@p2p.chat"
          ),
          "."
        ),
        _react2.default.createElement(
          "p",
          null,
          "For press, or any other queries, please get in touch at",
          " ",
          _react2.default.createElement(
            "a",
            { href: "mailto:p2pchat@tomjwatson.com" },
            "p2pchat@tomjwatson.com"
          ),
          "."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "h5",
          null,
          "About"
        ),
        _react2.default.createElement(
          "p",
          null,
          "p2p.chat is a free and open source project. Contributions or bug reports are extremely welcome at",
          " ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/tom-james-watson/p2p.chat" },
            "https://github.com/tom-james-watson/p2p.chat"
          ),
          "."
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "h5",
          null,
          "Legal"
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { href: "/privacy-policy" },
            "Privacy Policy"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { href: "/terms-and-conditions" },
            "Terms and Conditions"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "p",
          null,
          "Created by ",
          _react2.default.createElement(
            "a",
            { href: "https://tomjwatson.com" },
            "tomjwatson.com"
          ),
          "."
        )
      )
    )
  );
};