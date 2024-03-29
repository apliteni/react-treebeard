"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Polygon = (0, _styled["default"])('polygon', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['className', 'children', 'points'].indexOf(prop) !== -1;
  }
})(function (_ref) {
  var style = _ref.style;
  return style;
});

var Toggle = function Toggle(_ref2) {
  var style = _ref2.style,
      onClick = _ref2.onClick;
  var height = style.height,
      width = style.width;
  var midHeight = height * 0.5;
  var points = "0,0 0,".concat(height, " ").concat(width, ",").concat(midHeight);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "toggler",
    style: style.base,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_common.Div, {
    style: style.wrapper
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    height: height,
    width: width
  }, /*#__PURE__*/_react["default"].createElement(Polygon, {
    points: points,
    style: style.arrow
  }))));
};

Toggle.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  style: _propTypes["default"].object
};
var _default = Toggle;
exports["default"] = _default;