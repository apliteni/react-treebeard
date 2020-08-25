import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {isArray, isFunction} from 'lodash';

import {randomString} from '../../util';
import {Ul} from '../common';
import NodeHeader from '../NodeHeader';
import Drawer from './Drawer';
import Loading from './Loading';

const Li = styled('li', {
    shouldForwardProp: prop => ['className', 'children', 'ref'].indexOf(prop) !== -1
})(({style}) => style);

class TreeNode extends PureComponent {
    onClick() {
        const {node, onToggle} = this.props;
        if (onToggle) {
            onToggle(node, !node.toggled);
        }
    }

    decorators() {
        const {decorators, node} = this.props;
        let nodeDecorators = node.decorators || {};

        return Object.assign({}, decorators, nodeDecorators);
    }

    renderChildren(decorators) {
        const {
            decorators: propDecorators, node, style, onToggle, onSelect, customStyles
        } = this.props;

        if (node.loading) {
            return (
                <Loading decorators={decorators} style={style}/>
            );
        }

        let children = node.children;
        if (!isArray(children)) {
            children = children ? [children] : [];
        }

        return (
            <Ul style={style.subtree}>
                {children.map(child => (
                    <TreeNode
                        onSelect={onSelect}
                        onToggle={onToggle}
                        style={style}
                        customStyles={customStyles}
                        decorators={propDecorators}
                        key={child.id || randomString()}
                        node={child}
                    />
                ))}
            </Ul>
        );
    }

    render() {
        const {
            node, style, onSelect, customStyles
        } = this.props;
        const decorators = this.decorators();
        return (
            <Li style={style.base}>
                <NodeHeader
                    decorators={decorators}
                    node={node}
                    style={style}
                    customStyles={customStyles}
                    onClick={() => this.onClick()}
                    onSelect={isFunction(onSelect) ? (() => onSelect(node)) : undefined}
                />
                {/*<Drawer>*/}
                    {node.toggled & this.renderChildren(decorators)}
                {/*</Drawer>*/}
            </Li>
        );
    }
}

TreeNode.propTypes = {
    onSelect: PropTypes.func,
    onToggle: PropTypes.func,
    style: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
    node: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired
};

TreeNode.defaultProps = {
    customStyles: {}
};

export default TreeNode;
