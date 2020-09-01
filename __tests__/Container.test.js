import React from 'react';
import { shallow } from 'enzyme';

import { decorators } from '../src';
import Container from '../src/components/Decorators/Container';
import style from '../src/themes/default';
import data from './mocks/data';

const onClick = jest.fn();
const onSelect = jest.fn();

const renderComponent = (props = {}) => {
    const wrapper = shallow(
        <Container
            node={data}
            decorators={decorators}
            onClick={onClick}
            onSelect={onSelect}
            style={style.tree.node}
            terminal={false}
            {...props}
        />
    );
    wrapper.Toggle = () => wrapper.find('Toggle');
    return wrapper;
};

describe('<Container/>', () => {
    describe('when terminal is true', () => {
        it('should contains a decorators.Header into their children', () => {
            const wrapper = renderComponent();
            expect(
                wrapper.children().contains(
                    <div>
                        <decorators.Header
                            node={data}
                            style={style.tree.node.header}
                            onSelect={onSelect}
                        />
                    </div>
                )
            ).toBe(false);
        });
    });
});
