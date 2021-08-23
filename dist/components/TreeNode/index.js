"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _lodash = require("lodash");

var _util = require("../../util");

var _common = require("../common");

var _NodeHeader = _interopRequireDefault(require("../NodeHeader"));

var _Drawer = _interopRequireDefault(require("./Drawer"));

var _Loading = _interopRequireDefault(require("./Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Li = (0, _styled["default"])('li', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['className', 'children', 'ref'].indexOf(prop) !== -1;
  }
})(function (_ref) {
  var style = _ref.style;
  return style;
});

var TreeNode = /*#__PURE__*/function (_PureComponent) {
  _inherits(TreeNode, _PureComponent);

  var _super = _createSuper(TreeNode);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _super.apply(this, arguments);
  }

  _createClass(TreeNode, [{
    key: "onClick",
    value: function onClick() {
      var _this$props = this.props,
          node = _this$props.node,
          onToggle = _this$props.onToggle;

      if (onToggle) {
        onToggle(node, !node.toggled);
      }
    }
  }, {
    key: "decorators",
    value: function decorators() {
      var _this$props2 = this.props,
          decorators = _this$props2.decorators,
          node = _this$props2.node;
      var nodeDecorators = node.decorators || {};
      return _objectSpread(_objectSpread({}, decorators), {}, {
        nodeDecorators: nodeDecorators
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(decorators) {
      var _this$props3 = this.props,
          propDecorators = _this$props3.decorators,
          node = _this$props3.node,
          style = _this$props3.style,
          onToggle = _this$props3.onToggle,
          onSelect = _this$props3.onSelect,
          customStyles = _this$props3.customStyles;

      if (node.loading) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], {
          decorators: decorators,
          style: style
        });
      }

      var children = node.children;

      if (!(0, _lodash.isArray)(children)) {
        children = children ? [children] : [];
      }

      return /*#__PURE__*/_react["default"].createElement(_common.Ul, {
        style: style.subtree
      }, children.map(function (child) {
        return /*#__PURE__*/_react["default"].createElement(TreeNode, {
          onSelect: onSelect,
          onToggle: onToggle,
          style: style,
          customStyles: customStyles,
          decorators: propDecorators,
          key: child.id || (0, _util.randomString)(),
          node: child
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props4 = this.props,
          node = _this$props4.node,
          style = _this$props4.style,
          onSelect = _this$props4.onSelect,
          customStyles = _this$props4.customStyles;
      var decorators = this.decorators();
      return /*#__PURE__*/_react["default"].createElement(Li, {
        style: style.base
      }, /*#__PURE__*/_react["default"].createElement(_NodeHeader["default"], {
        decorators: decorators,
        node: node,
        style: style,
        customStyles: customStyles,
        onClick: function onClick() {
          return _this.onClick();
        },
        onSelect: (0, _lodash.isFunction)(onSelect) ? function () {
          return onSelect(node);
        } : undefined
      }), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], null, node.toggled ? this.renderChildren(decorators) : null));
    }
  }]);

  return TreeNode;
}(_react.PureComponent);

TreeNode.propTypes = {
  onSelect: _propTypes["default"].func,
  onToggle: _propTypes["default"].func,
  style: _propTypes["default"].object.isRequired,
  customStyles: _propTypes["default"].object,
  node: _propTypes["default"].object.isRequired,
  decorators: _propTypes["default"].object.isRequired
};
TreeNode.defaultProps = {
  customStyles: {}
};
var _default = TreeNode;
exports["default"] = _default;