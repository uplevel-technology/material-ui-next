'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

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

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Menu = require('../Menu');

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Toolbar = require('../Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _KeyboardArrowLeft = require('../svg-icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('../svg-icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;
// @inheritedComponent TableRow

var styles = exports.styles = function styles(theme) {
  return {
    cell: {
      // Increase the specificity to override TableCell.
      '&:last-child': {
        padding: '0'
      }
    },
    toolbar: {
      height: 56,
      minHeight: 56,
      paddingRight: 2
    },
    spacer: {
      flex: '1 1 100%'
    },
    select: {
      marginLeft: theme.spacing.unit,
      width: 34,
      textAlign: 'right',
      paddingRight: 22,
      color: theme.palette.text.secondary,
      height: 32,
      lineHeight: '32px'
    },
    selectRoot: {
      marginRight: theme.spacing.unit * 4
    },
    actions: {
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_LabelDisplayedRowsArgs = {
  from: require('prop-types').number.isRequired,
  to: require('prop-types').number.isRequired,
  count: require('prop-types').number.isRequired,
  page: require('prop-types').number.isRequired
};
var babelPluginFlowReactPropTypes_proptype_Props = {
  classes: require('prop-types').object,
  className: require('prop-types').string,
  count: require('prop-types').number.isRequired,
  labelDisplayedRows: require('prop-types').func,
  labelRowsPerPage: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),
  onChangePage: require('prop-types').func.isRequired,
  onChangeRowsPerPage: require('prop-types').func.isRequired,
  page: require('prop-types').number.isRequired,
  rowsPerPage: require('prop-types').number.isRequired,
  rowsPerPageOptions: require('prop-types').arrayOf(require('prop-types').number)
};

var _ref3 = _react2.default.createElement(_Input2.default, { disableUnderline: true });

var _ref4 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref5 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

/**
 * A `TableRow` based component for placing inside `TableFooter` for pagination.
 */
var TablePagination = function (_React$Component) {
  (0, _inherits3.default)(TablePagination, _React$Component);

  function TablePagination() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TablePagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TablePagination.__proto__ || (0, _getPrototypeOf2.default)(TablePagination)).call.apply(_ref, [this].concat(args))), _this), _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    }, _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TablePagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var count = _ref2.count,
          onChangePage = _ref2.onChangePage,
          rowsPerPage = _ref2.rowsPerPage;

      var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
      if (this.props.page > newLastPage) {
        onChangePage(null, newLastPage);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          count = _props.count,
          labelDisplayedRows = _props.labelDisplayedRows,
          labelRowsPerPage = _props.labelRowsPerPage,
          onChangePage = _props.onChangePage,
          onChangeRowsPerPage = _props.onChangeRowsPerPage,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          rowsPerPageOptions = _props.rowsPerPageOptions,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'count', 'labelDisplayedRows', 'labelRowsPerPage', 'onChangePage', 'onChangeRowsPerPage', 'page', 'rowsPerPage', 'rowsPerPageOptions']);


      return _react2.default.createElement(
        _TableRow2.default,
        other,
        _react2.default.createElement(
          _TableCell2.default,
          {
            className: classes.cell,
            colSpan: 9001 // col-span over everything
          },
          _react2.default.createElement(
            _Toolbar2.default,
            { className: classes.toolbar },
            _react2.default.createElement('div', { className: classes.spacer }),
            _react2.default.createElement(
              _Typography2.default,
              { type: 'caption' },
              labelRowsPerPage
            ),
            _react2.default.createElement(
              _Select2.default,
              {
                classes: { root: classes.selectRoot, select: classes.select },
                input: _ref3,
                value: rowsPerPage,
                onChange: onChangeRowsPerPage
              },
              rowsPerPageOptions.map(function (rowsPerPageOption) {
                return _react2.default.createElement(
                  _Menu.MenuItem,
                  { key: rowsPerPageOption, value: rowsPerPageOption },
                  rowsPerPageOption
                );
              })
            ),
            _react2.default.createElement(
              _Typography2.default,
              { type: 'caption' },
              labelDisplayedRows({
                from: count === 0 ? 0 : page * rowsPerPage + 1,
                to: Math.min(count, (page + 1) * rowsPerPage),
                count: count,
                page: page
              })
            ),
            _react2.default.createElement(
              'div',
              { className: classes.actions },
              _react2.default.createElement(
                _IconButton2.default,
                { onClick: this.handleBackButtonClick, disabled: page === 0 },
                _ref4
              ),
              _react2.default.createElement(
                _IconButton2.default,
                {
                  onClick: this.handleNextButtonClick,
                  disabled: page >= Math.ceil(count / rowsPerPage) - 1
                },
                _ref5
              )
            )
          )
        )
      );
    }
  }]);
  return TablePagination;
}(_react2.default.Component);

TablePagination.defaultProps = {
  labelRowsPerPage: 'Rows per page:',
  labelDisplayedRows: function labelDisplayedRows(_ref6) {
    var from = _ref6.from,
        to = _ref6.to,
        count = _ref6.count;
    return from + '-' + to + ' of ' + count;
  },
  rowsPerPageOptions: [5, 10, 25]
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTablePagination' })(TablePagination);