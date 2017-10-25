'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Transition

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_TransitionDuration = require('prop-types').oneOfType([require('prop-types').number, require('prop-types').shape({
  enter: require('prop-types').number,
  exit: require('prop-types').number
}), require('prop-types').oneOf(['auto'])]);

var babelPluginFlowReactPropTypes_proptype_Props = {
  appear: require('prop-types').bool,
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired,
  classes: require('prop-types').object,
  collapsedHeight: require('prop-types').string,
  in: require('prop-types').bool.isRequired,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  style: require('prop-types').object,
  theme: require('prop-types').object,
  timeout: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').shape({
    enter: require('prop-types').number,
    exit: require('prop-types').number
  }), require('prop-types').oneOf(['auto'])])
};


var reflow = function reflow(node) {
  return node.scrollTop;
};

var Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.autoTransitionDuration = undefined, _this.handleEnter = function (node) {
      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var _this$props = _this.props,
          timeout = _this$props.timeout,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else if (typeof timeout === 'number') {
        node.style.transitionDuration = timeout + 'ms';
      } else if (timeout) {
        node.style.transitionDuration = timeout.enter + 'ms';
      } else {
        // The propType will warn in this case.
      }

      node.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleEntered = function (node) {
      node.style.height = 'auto';

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.handleExit = function (node) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      reflow(node);
      node.style.height = wrapperHeight + 'px';
      reflow(node);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExiting = function (node) {
      var _this$props2 = _this.props,
          timeout = _this$props2.timeout,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      reflow(node);

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else if (typeof timeout === 'number') {
        node.style.transitionDuration = timeout + 'ms';
      } else if (timeout) {
        node.style.transitionDuration = timeout.exit + 'ms';
      } else {
        // The propType will warn in this case.
      }

      reflow(node);

      node.style.height = _this.props.collapsedHeight;

      reflow(node);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.addEndListener = function (node, next) {
      var timeout = void 0;

      if (_this.props.timeout === 'auto') {
        timeout = _this.autoTransitionDuration || 0;
      } else {
        timeout = _this.props.timeout;
      }

      setTimeout(next, timeout);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          appear = _props.appear,
          children = _props.children,
          classes = _props.classes,
          collapsedHeight = _props.collapsedHeight,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          style = _props.style,
          timeout = _props.timeout,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['appear', 'children', 'classes', 'collapsedHeight', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'style', 'timeout', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          appear: appear,
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          onExiting: this.handleExiting,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          style: (0, _extends3.default)({ minHeight: collapsedHeight }, style)
        }, other),
        function (state) {
          return _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(classes.container, (0, _defineProperty3.default)({}, classes.entered, state === 'entered'))
            },
            _react2.default.createElement(
              'div',
              {
                ref: function ref(node) {
                  _this2.wrapper = node;
                }
              },
              children
            )
          );
        }
      );
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.defaultProps = {
  appear: false,
  collapsedHeight: '0px',
  timeout: _transitions.duration.standard
};
exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);