import React from 'react'
import { shallow } from 'enzyme'
import ListItems from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render expense list component with expense info', () => {
    const wrapper = shallow(<ListItems {...expenses}/>)
    expect(wrapper).toMatchSnapshot()
})