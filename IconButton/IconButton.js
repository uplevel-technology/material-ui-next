'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = require('../ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = require('../utils/helpers');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

require('../SvgIcon');

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any; //  weak
// @inheritedComponent ButtonBase

// Ensure CSS specificity


var styles = exports.styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      width: theme.spacing.unit * 6,
      height: theme.spacing.unit * 6,
      padding: 0,
      borderRadius: '50%',
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      })
    },
    colorAccent: {
      color: theme.palette.secondary.A200
    },
    colorContrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    colorPrimary: {
      color: theme.palette.primary[500]
    },
    colorInherit: {
      color: 'inherit'
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    icon: {
      width: '1em',
      height: '1em'
    },
    keyboardFocused: {
      backgroundColor: theme.palette.text.divider
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: require('prop-types').func,

  /**
   * The icon element.
   * If a string is provided, it will be used as an icon font ligature.
   */
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),

  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: require('prop-types').oneOf(['default', 'inherit', 'primary', 'contrast', 'accent']).isRequired,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: require('prop-types').bool.isRequired,

  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: require('prop-types').bool.isRequired,

  /**
   * Use that property to pass a ref callback to the root component.
   */
  rootRef: require('prop-types').func
};

/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */
var IconButton = function (_React$Component) {
  (0, _inherits3.default)(IconButton, _React$Component);

  function IconButton() {
    (0, _classCallCheck3.default)(this, IconButton);
    return (0, _possibleConstructorReturn3.default)(this, (IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          buttonRef = _props.buttonRef,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          color = _props.color,
          disabled = _props.disabled,
          rootRef = _props.rootRef,
          other = (0, _objectWithoutProperties3.default)(_props, ['buttonRef', 'children', 'classes', 'className', 'color', 'disabled', 'rootRef']);


      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'default'), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), className),
          centerRipple: true,
          keyboardFocusedClassName: classes.keyboardFocused,
          disabled: disabled
        }, other, {
          rootRef: buttonRef,
          ref: rootRef
        }),
        _react2.default.createElement(
          'span',
          { className: classes.label },
          typeof children === 'string' ? _react2.default.createElement(
            _Icon2.default,
            { className: classes.icon },
            children
          ) : _react2.default.Children.map(children, function (child) {
            if ((0, _reactHelpers.isMuiElement)(child, ['Icon', 'SvgIcon'])) {
              return _react2.default.cloneElement(child, {
                className: (0, _classnames2.default)(classes.icon, child.props.className)
              });
            }

            return child;
          })
        )
      );
    }
  }]);
  return IconButton;
}(_react2.default.Component);

IconButton.defaultProps = {
  color: 'default',
  disabled: false,
  disableRipple: false
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiIconButton' })(IconButton);