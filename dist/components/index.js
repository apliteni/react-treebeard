"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _default2 = _interopRequireDefault(require("../themes/default"));

var _util = require("../util");

var _common = require("./common");

var defaultDecorators = _interopRequireWildcard(require("./Decorators"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TreeBeard = function TreeBeard(_ref) {
  var decorators = _ref.decorators,
      data = _ref.data,
      onToggle = _ref.onToggle,
      style = _ref.style,
      onSelect = _ref.onSelect,
      customStyles = _ref.customStyles;
  return /*#__PURE__*/_react["default"].createElement(_common.Ul, {
    style: _objectSpread(_objectSpread({}, _default2["default"].tree.base), style.tree.base)
  }, (0, _lodash.castArray)(data).map(function (node) {
    return /*#__PURE__*/_react["default"].createElement(_TreeNode["default"], {
      decorators: decorators,
      node: node,
      onToggle: onToggle,
      onSelect: onSelect,
      customStyles: customStyles,
      key: node.id || (0, _util.randomString)(),
      style: _objectSpread(_objectSpread({}, _default2["default"].tree.node), style.tree.node)
    });
  }));
};

TreeBeard.propTypes = {
  style: _propTypes["default"].object,
  customStyles: _propTypes["default"].object,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]).isRequired,
  onToggle: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  decorators: _propTypes["default"].object
};
TreeBeard.defaultProps = {
  style: _default2["default"],
  decorators: defaultDecorators,
  customStyles: {}
};
var _default = TreeBeard;
exports["default"] = _default;