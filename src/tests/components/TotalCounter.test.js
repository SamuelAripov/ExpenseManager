import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { TotalCounter } from '../../components/TotalCounter'


test('should render message without expenses', () => {
    const wrapper = shallow(<TotalCounter expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render message with one expense', () => {
    const wrapper = shallow(<TotalCounter expenses={[expenses[1]]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render message with multiple expenses', () => {
    const wrapper = shallow(<TotalCounter expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})