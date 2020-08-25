import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Container extends PureComponent {
    renderToggleDecorator() {
        const {style, decorators, onClick} = this.props;
        return <decorators.Toggle style={style.toggle} onClick={onClick}/>;
    }

    render() {
        const {
            style, decorators, terminal, node, onSelect, customStyles
        } = this.props;
        return (
            <div style={node.active ? {...style.container} : {...style.link}}>
                {!terminal ? this.renderToggleDecorator() : null}
                <decorators.Header node={node} style={style.header} customStyles={customStyles} onSelect={onSelect}/>
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
    node: PropTypes.object.isRequired
};

Container.defaultProps = {
    onSelect: null,
    customStyles: {}
};

export default Container;
