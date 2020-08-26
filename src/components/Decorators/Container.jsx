import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Container extends PureComponent {
  handleClickHead = (e) => {
    const { onSelect, onClick } = this.props;
    onSelect(e);
    onClick(e);
  };

  renderToggle() {
    const { style, decorators, onClick } = this.props;
    return <decorators.Toggle style={style.toggle} onClick={onClick} />;
  }

  render() {
    const { style, decorators, terminal, node, customStyles } = this.props;
    return (
      <div style={node.active ? { ...style.container } : { ...style.link }}>
        {!terminal ? this.renderToggle() : null}
        <decorators.Header
          node={node}
          style={style.header}
          customStyles={customStyles}
          onSelect={(e) => this.handleClickHead(e)}
        />
      </div>
    );
  }
}

Container.propTypes = {
  customStyles: PropTypes.object,
  style: PropTypes.object.isRequired,
  decorators: PropTypes.object.isRequired,
  terminal: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
  node: PropTypes.object.isRequired,
};

Container.defaultProps = {
  onSelect: null,
  customStyles: {},
};

export default Container;
