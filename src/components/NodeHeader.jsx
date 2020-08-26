import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NodeHeader extends PureComponent {
  render() {
    const {
      decorators,
      node,
      onClick,
      style,
      onSelect,
      customStyles,
    } = this.props;
    const { active, children } = node;
    const terminal = !children;
    let styles;
    if (active) {
      styles = Object.assign(style, {
        container: { ...style.link, ...style.activeLink },
      });
    } else {
      styles = style;
    }
    return (
      <decorators.Container
        decorators={decorators}
        node={node}
        onClick={onClick}
        customStyles={customStyles}
        onSelect={onSelect}
        terminal={terminal}
        style={styles}
      />
    );
  }
}

NodeHeader.propTypes = {
  style: PropTypes.object.isRequired,
  customStyles: PropTypes.object,
  decorators: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
};

NodeHeader.defaultProps = {
  customStyles: {},
};

export default NodeHeader;
