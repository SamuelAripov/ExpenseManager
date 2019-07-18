import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'

test('should render header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
