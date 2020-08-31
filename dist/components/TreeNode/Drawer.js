"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Drawer = function Drawer(_ref) {
  var children = _ref.children;
  return children;
};

Drawer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].arrayOf(_propTypes["default"].func, _propTypes["default"].shape({})), _propTypes["default"].shape({})])
};
var _default = Drawer;
exports["default"] = _default;