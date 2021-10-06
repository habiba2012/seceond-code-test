import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';
import Tabs from '../components/Tab';
import ReusableComponent from '../components/ReusableComponent';

test('renders without throwing errors', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toMatchSnapshot();
})

test('renders <Tab>', () => {
    const wrapper = render(<Tabs />);
    expect(wrapper).toMatchSnapshot();
})

test('renders <ReusableComponent>', () => {
    const wrapper = render(<ReusableComponent />);
    expect(wrapper).toMatchSnapshot();
})