var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//  weak

import React from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Ripple from './Ripple';

const DURATION = 550;
export const DELAY_RIPPLE = 80;

export const styles = theme => ({
  root: {
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    zIndex: 0
  },
  wrapper: {
    opacity: 1
  },
  wrapperLeaving: {
    opacity: 0,
    animation: `mui-ripple-exit ${DURATION}ms ${theme.transitions.easing.easeInOut}`
  },
  wrapperPulsating: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    animation: `mui-ripple-pulsate 1500ms ${theme.transitions.easing.easeInOut} 200ms infinite`,
    rippleVisible: {
      opacity: 0.2
    }
  },
  '@keyframes mui-ripple-enter': {
    '0%': {
      transform: 'scale(0)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  '@keyframes mui-ripple-exit': {
    '0%': {
      opacity: 1
    },
    '100%': {
      opacity: 0
    }
  },
  '@keyframes mui-ripple-pulsate': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(0.9)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  ripple: {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    opacity: 0,
    position: 'absolute',
    borderRadius: '50%',
    background: 'currentColor'
  },
  rippleVisible: {
    opacity: 0.3,
    transform: 'scale(1)',
    animation: `mui-ripple-enter ${DURATION}ms ${theme.transitions.easing.easeInOut}`
  },
  rippleFast: {
    animationDuration: '200ms'
  }
});

/**
 * @ignore - internal component.
 */
class TouchRipple extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      nextKey: 0,
      ripples: []
    }, this.ignoringMouseDown = false, this.startTimer = null, this.startTimerCommit = null, this.pulsate = () => {
      this.start({}, { pulsate: true });
    }, this.start = (event = {}, options = {}, cb) => {
      const {
        pulsate = false,
        center = this.props.center || options.pulsate,
        fakeElement = false // For test purposes
      } = options;

      if (event.type === 'mousedown' && this.ignoringMouseDown) {
        this.ignoringMouseDown = false;
        return;
      }

      if (event.type === 'touchstart') {
        this.ignoringMouseDown = true;
      }

      const element = fakeElement ? null : ReactDOM.findDOMNode(this);
      const rect = element ? // $FlowFixMe
      element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };

      // Get the size of the ripple
      let rippleX;
      let rippleY;
      let rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        const clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);

        // For some reason the animation is broken on Mobile Chrome if the size if even.
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(
        // $FlowFixMe
        Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(
        // $FlowFixMe
        Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      }

      // Touche devices
      if (event.touches) {
        // Prepare the ripple effect.
        this.startTimerCommit = () => {
          this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
        };
        // Deplay the execution of the ripple effect.
        this.startTimer = setTimeout(() => {
          this.startTimerCommit();
          this.startTimerCommit = null;
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      } else {
        this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb });
      }
    }, this.startCommit = params => {
      const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
      let ripples = this.state.ripples;

      // Add a ripple to the ripples array
      ripples = [...ripples, React.createElement(Ripple, {
        key: this.state.nextKey,
        classes: this.props.classes,
        timeout: {
          exit: DURATION,
          enter: DURATION
        },
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })];

      this.setState({
        nextKey: this.state.nextKey + 1,
        ripples
      }, cb);
    }, this.stop = (event, cb) => {
      clearTimeout(this.startTimer);
      const { ripples } = this.state;

      // The touch interaction occures to quickly.
      // We still want to show ripple effect.
      if (event.type === 'touchend' && this.startTimerCommit) {
        event.persist();
        this.startTimerCommit();
        this.startTimerCommit = null;
        this.startTimer = setTimeout(() => {
          this.stop(event, cb);
        }, 0);
        return;
      }

      this.startTimerCommit = null;

      if (ripples && ripples.length) {
        this.setState({
          ripples: ripples.slice(1)
        }, cb);
      }
    }, _temp;
  }

  componentWillUnmount() {
    clearTimeout(this.startTimer);
  }

  // Used to filter out mouse emulated events on mobile.

  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  // This is the hook called once the previous timeout is ready.


  render() {
    const _props = this.props,
          { center, classes, className } = _props,
          other = _objectWithoutProperties(_props, ['center', 'classes', 'className']);

    return React.createElement(
      TransitionGroup,
      _extends({
        component: 'span',
        enter: true,
        exit: true,
        className: classNames(classes.root, className)
      }, other),
      this.state.ripples
    );
  }
}

TouchRipple.defaultProps = {
  center: false
};
export default withStyles(styles, { flip: false, name: 'MuiTouchRipple' })(TouchRipple);