var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.primary
  }
});

class TableBody extends React.Component {

  getChildContext() {
    // eslint-disable-line class-methods-use-this
    return {
      table: {
        body: true
      }
    };
  }

  render() {
    const _props = this.props,
          {
      classes,
      className: classNameProp,
      children,
      component: ComponentProp = 'tbody'
    } = _props,
          other = _objectWithoutProperties(_props, ['classes', 'className', 'children', 'component']);
    const className = classNames(classes.root, classNameProp);

    return React.createElement(
      ComponentProp,
      _extends({ className: className }, other),
      children
    );
  }
}

TableBody.defaultProps = {
  component: 'tbody'
};
TableBody.childContextTypes = {
  table: PropTypes.object
};

export default withStyles(styles, { name: 'MuiTableBody' })(TableBody);