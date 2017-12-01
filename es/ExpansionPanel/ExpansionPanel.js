var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent Paper

import React from 'react';

import classNames from 'classnames';
import Collapse from '../transitions/Collapse';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';
import { isMuiElement } from '../utils/reactHelpers';

export const styles = theme => {
  const transition = {
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
      margin: `${theme.spacing.unit * 2}px 0`,
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

class ExpansionPanel extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      expanded: false
    }, this.isControlled = null, this.handleChange = event => {
      const { onChange } = this.props;
      const expanded = !this.state.expanded;

      if (onChange) {
        onChange(event, expanded);
      }

      if (!this.isControlled) {
        this.setState({ expanded });
      }
    }, _temp;
  }

  componentWillMount() {
    const { expanded, defaultExpanded } = this.props;
    this.isControlled = expanded !== undefined;
    this.setState({
      expanded: this.isControlled ? expanded : defaultExpanded
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.isControlled) {
      this.setState({
        expanded: nextProps.expanded
      });
    }
  }

  render() {
    const _props = this.props,
          {
      children: childrenProp,
      classes,
      className: classNameProp,
      CollapseProps,
      defaultExpanded,
      disabled,
      expanded: expandedProp
    } = _props,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'CollapseProps', 'defaultExpanded', 'disabled', 'expanded']);
    const { expanded } = this.state;

    const className = classNames(classes.root, {
      [classes.expanded]: expanded,
      [classes.disabled]: disabled
    }, classNameProp);

    let summary = null;

    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      if (isMuiElement(child, ['ExpansionPanelSummary'])) {
        summary = React.cloneElement(child, {
          disabled,
          expanded,
          onChange: this.handleChange
        });
        return null;
      }

      return child;
    });

    const containerProps = !expanded ? {
      'aria-hidden': 'true'
    } : null;

    return React.createElement(
      Paper,
      _extends({ className: className, elevation: 1, square: true }, other),
      summary,
      React.createElement(
        Collapse,
        _extends({
          'in': expanded,
          transitionDuration: 'auto',
          containerProps: containerProps
        }, CollapseProps),
        children
      )
    );
  }
}

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};
export default withStyles(styles, { name: 'MuiExpansionPanel' })(ExpansionPanel);