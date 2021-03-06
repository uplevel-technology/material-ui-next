import React from 'react';

import ReactDOM from 'react-dom';
import canUseDom from 'dom-helpers/util/inDOM';

/**
 * @ignore - internal component.
 */
class Portal extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.layer = null, _temp;
  }

  componentDidMount() {
    // Support react@15.x, will be removed at some point
    if (!ReactDOM.createPortal) {
      this.renderLayer();
    }
  }

  componentDidUpdate() {
    // Support react@15.x, will be removed at some point
    if (!ReactDOM.createPortal) {
      this.renderLayer();
    }
  }

  componentWillUnmount() {
    this.unrenderLayer();
  }

  getLayer() {
    if (!this.layer) {
      this.layer = document.createElement('div');
      this.layer.setAttribute('data-mui-portal', 'true');
      if (document.body && this.layer) {
        document.body.appendChild(this.layer);
      }
    }

    return this.layer;
  }

  unrenderLayer() {
    if (!this.layer) {
      return;
    }

    // Support react@15.x, will be removed at some point
    if (!ReactDOM.createPortal) {
      ReactDOM.unmountComponentAtNode(this.layer);
    }

    if (document.body) {
      document.body.removeChild(this.layer);
    }
    this.layer = null;
  }

  renderLayer() {
    const { children, open } = this.props;

    if (open) {
      // By calling this method in componentDidMount() and
      // componentDidUpdate(), you're effectively creating a "wormhole" that
      // funnels React's hierarchical updates through to a DOM node on an
      // entirely different part of the page.
      const layerElement = React.Children.only(children);
      ReactDOM.unstable_renderSubtreeIntoContainer(this, layerElement, this.getLayer());
    } else {
      this.unrenderLayer();
    }
  }

  render() {
    const { children, open } = this.props;

    // Support react@15.x, will be removed at some point
    if (!ReactDOM.createPortal) {
      return null;
    }

    // Can't be rendered server-side.
    if (canUseDom) {
      if (open) {
        const layer = this.getLayer();
        // $FlowFixMe layer is non-null
        return ReactDOM.createPortal(children, layer);
      }

      this.unrenderLayer();
    }

    return null;
  }
}

Portal.defaultProps = {
  open: false
};
export default Portal;