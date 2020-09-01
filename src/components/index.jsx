import React from 'react';
import PropTypes from 'prop-types';
import { castArray } from 'lodash';

import defaultTheme from '../themes/default';
import { randomString } from '../util';
import { Ul } from './common';
import * as defaultDecorators from './Decorators';
import TreeNode from './TreeNode';

const TreeBeard = ({
    decorators,
    data,
    onToggle,
    style,
    onSelect,
    customStyles,
}) => (
    <Ul style={{ ...defaultTheme.tree.base, ...style.tree.base }}>
        {castArray(data).map((node) => (
            <TreeNode
                decorators={decorators}
                node={node}
                onToggle={onToggle}
                onSelect={onSelect}
                customStyles={customStyles}
                key={node.id || randomString()}
                style={{ ...defaultTheme.tree.node, ...style.tree.node }}
            />
        ))}
    </Ul>
);

TreeBeard.propTypes = {
    style: PropTypes.object,
    customStyles: PropTypes.object,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    onToggle: PropTypes.func,
    onSelect: PropTypes.func,
    decorators: PropTypes.object,
};

TreeBeard.defaultProps = {
    style: defaultTheme,
    decorators: defaultDecorators,
    customStyles: {},
};

export default TreeBeard;
