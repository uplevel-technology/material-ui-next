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

var _Collapse = require('../transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;
// @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.ease
  };

  return {
    root: {
      position: 'relative',
      margin: 0,
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.text.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': {
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    expanded: {
      margin: theme.spacing.unit * 2 + 'px 0',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },
    disabled: {
      backgroundColor: theme.palette.text.divider
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * The content of the expansion panel.
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
   * Properties applied to the `Collapse` element.
   */
  CollapseProps: require('prop-types').object,

  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: require('prop-types').bool,

  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: require('prop-types').bool.isRequired,

  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: require('prop-types').bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: require('prop-types').func
};

var ExpansionPanel = function (_React$Component) {
  (0, _inherits3.default)(ExpansionPanel, _React$Component);

  function ExpansionPanel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExpansionPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExpansionPanel.__proto__ || (0, _getPrototypeOf2.default)(ExpansionPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.isControlled = null, _this.handleChange = function (event) {
      var onChange = _this.props.onChange;

      var expanded = !_this.state.expanded;

      if (onChange) {
        onChange(event, expanded);
      }

      if (!_this.isControlled) {
        _this.setState({ expanded: expanded });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExpansionPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          expanded = _props.expanded,
          defaultExpanded = _props.defaultExpanded;

      this.isControlled = expanded !== undefined;
      this.setState({
        expanded: this.isControlled ? expanded : defaultExpanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlled) {
        this.setState({
          expanded: nextProps.expanded
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          childrenProp = _props2.children,
          classes = _props2.classes,
          classNameProp = _props2.className,
          CollapseProps = _props2.CollapseProps,
          defaultExpanded = _props2.defaultExpanded,
          disabled = _props2.disabled,
          expandedProp = _props2.expanded,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'classes', 'className', 'CollapseProps', 'defaultExpanded', 'disabled', 'expanded']);
      var expanded = this.state.expanded;


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.expanded, expanded), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

      var summary = null;

      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        if ((0, _reactHelpers.isMuiElement)(child, ['ExpansionPanelSummary'])) {
          summary = _react2.default.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });

      var containerProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({ className: className, elevation: 1, square: true }, other),
        summary,
        _react2.default.createElement(
          _Collapse2.default,
          (0, _extends3.default)({
            'in': expanded,
            transitionDuration: 'auto',
            containerProps: containerProps
          }, CollapseProps),
          children
        )
      );
    }
  }]);
  return ExpansionPanel;
}(_react2.default.Component);

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanel' })(ExpansionPanel);