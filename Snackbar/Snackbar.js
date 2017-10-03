'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = require('../styles/transitions');

var _ClickAwayListener = require('../internal/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _helpers = require('../utils/helpers');

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _SnackbarContent = require('./SnackbarContent');

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ComponentType = require('prop-types').func;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionDuration = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionDuration || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  var gutter = theme.spacing.unit * 3;
  var top = { top: 0 };
  var bottom = { bottom: 0 };
  var right = { justifyContent: 'flex-end' };
  var left = { justifyContent: 'flex-start' };
  var topSpace = { top: gutter };
  var bottomSpace = { bottom: gutter };
  var rightSpace = { right: gutter };
  var leftSpace = { left: gutter };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };

  return {
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    anchorTopCenter: {
      extend: [top, center]
    },
    anchorBottomCenter: {
      extend: [bottom, center]
    },
    anchorTopRight: (0, _defineProperty3.default)({
      extend: [top, right]
    }, theme.breakpoints.up('md'), {
      left: 'auto',
      extend: [topSpace, rightSpace]
    }),
    anchorBottomRight: (0, _defineProperty3.default)({
      extend: [bottom, right]
    }, theme.breakpoints.up('md'), {
      left: 'auto',
      extend: [bottomSpace, rightSpace]
    }),
    anchorTopLeft: (0, _defineProperty3.default)({
      extend: [top, left]
    }, theme.breakpoints.up('md'), {
      right: 'auto',
      extend: [topSpace, leftSpace]
    }),
    anchorBottomLeft: (0, _defineProperty3.default)({
      extend: [bottom, left]
    }, theme.breakpoints.up('md'), {
      right: 'auto',
      extend: [bottomSpace, leftSpace]
    })
  };
};

var babelPluginFlowReactPropTypes_proptype_Origin = {
  horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]),
  vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number])
};
var babelPluginFlowReactPropTypes_proptype_Props = {
  action: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  anchorOrigin: require('prop-types').shape({
    horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]),
    vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number])
  }),
  autoHideDuration: require('prop-types').number,
  resumeHideDuration: require('prop-types').number,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  key: require('prop-types').any,
  message: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onMouseEnter: require('prop-types').func,
  onMouseLeave: require('prop-types').func,
  onRequestClose: require('prop-types').func,
  open: require('prop-types').bool.isRequired,
  SnackbarContentProps: require('prop-types').object,
  transition: require('prop-types').oneOfType([typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType), typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)]),
  transitionDuration: typeof babelPluginFlowReactPropTypes_proptype_TransitionDuration === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionDuration : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionDuration)
};

var Snackbar = function (_React$Component) {
  (0, _inherits3.default)(Snackbar, _React$Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Snackbar.__proto__ || (0, _getPrototypeOf2.default)(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // Used to only render active snackbars.
      exited: false
    }, _this.timerAutoHide = null, _this.handleMouseEnter = function (event) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
      _this.handlePause();
    }, _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
      _this.handleResume();
    }, _this.handleClickAway = function (event) {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose(event, 'clickaway');
      }
    }, _this.handlePause = function () {
      clearTimeout(_this.timerAutoHide);
    }, _this.handleResume = function () {
      if (_this.props.autoHideDuration !== undefined) {
        if (_this.props.resumeHideDuration !== undefined) {
          _this.setAutoHideTimer(_this.props.resumeHideDuration);
          return;
        }
        _this.setAutoHideTimer((_this.props.autoHideDuration || 0) * 0.5);
      }
    }, _this.handleTransitionExited = function () {
      _this.setState({ exited: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Snackbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.open) {
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.setAutoHideTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open && this.state.exited) {
        this.setState({ exited: false });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }
  }, {
    key: 'setAutoHideTimer',


    // Timer that controls delay before snackbar auto hides
    value: function setAutoHideTimer() {
      var _this2 = this;

      var autoHideDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.props.onRequestClose || this.props.autoHideDuration === undefined) {
        return;
      }

      clearTimeout(this.timerAutoHide);
      this.timerAutoHide = setTimeout(function () {
        if (!_this2.props.onRequestClose || _this2.props.autoHideDuration === undefined) {
          return;
        }

        _this2.props.onRequestClose(null, 'timeout');
      }, autoHideDuration || this.props.autoHideDuration || 0);
    }

    // Pause the timer when the user is interacting with the Snackbar
    // or when the user hide the window.


    // Restart the timer when the user is no longer interacting with the Snackbar
    // or when the window is shown back.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          _props$anchorOrigin = _props.anchorOrigin,
          vertical = _props$anchorOrigin.vertical,
          horizontal = _props$anchorOrigin.horizontal,
          autoHideDuration = _props.autoHideDuration,
          resumeHideDuration = _props.resumeHideDuration,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          transitionDuration = _props.transitionDuration,
          message = _props.message,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onRequestClose = _props.onRequestClose,
          open = _props.open,
          SnackbarContentProps = _props.SnackbarContentProps,
          transitionProp = _props.transition,
          other = (0, _objectWithoutProperties3.default)(_props, ['action', 'anchorOrigin', 'autoHideDuration', 'resumeHideDuration', 'children', 'classes', 'className', 'transitionDuration', 'message', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onMouseEnter', 'onMouseLeave', 'onRequestClose', 'open', 'SnackbarContentProps', 'transition']);


      if (!open && this.state.exited) {
        return null;
      }

      var transitionProps = {
        in: open,
        transitionAppear: true,
        transitionDuration: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: (0, _helpers.createChainedFunction)(this.handleTransitionExited, onExited)
      };
      var transitionContent = children || _react2.default.createElement(_SnackbarContent2.default, (0, _extends3.default)({ message: message, action: action }, SnackbarContentProps));

      var transition = void 0;
      if (typeof transitionProp === 'function') {
        transition = _react2.default.createElement(transitionProp, transitionProps, transitionContent);
      } else {
        // $FlowFixMe - rosskevin - figure this out later
        transition = _react2.default.cloneElement(transitionProp || _react2.default.createElement(_Slide2.default, { direction: vertical === 'top' ? 'down' : 'up' }), transitionProps, transitionContent);
      }

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onFocus: this.handleResume, onBlur: this.handlePause },
        _react2.default.createElement(
          _ClickAwayListener2.default,
          { onClickAway: this.handleClickAway },
          _react2.default.createElement(
            'div',
            (0, _extends3.default)({
              className: (0, _classnames2.default)(classes.root, classes['anchor' + (0, _helpers.capitalizeFirstLetter)(vertical) + (0, _helpers.capitalizeFirstLetter)(horizontal)], className),
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave
            }, other),
            transition
          )
        )
      );
    }
  }]);
  return Snackbar;
}(_react2.default.Component);

Snackbar.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSnackbar' })(Snackbar);