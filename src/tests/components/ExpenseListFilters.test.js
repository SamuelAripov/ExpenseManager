import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { defaultValues, providedValues } from '../fixtures/filters'

let setTextFilter, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={defaultValues}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})

test('should render ExpenseListFilters default Values', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with provided Values', () => {
    wrapper.setProps({
        filters: providedValues
    })
    expect(wrapper).toMatchSnapshot()
})

test('should set filters text to "rent"', () => {
    const newValue = 'rent'
    wrapper.find('input').simulate('change', { target: { newValue } })
    expect(setTextFilter).toHaveBeenCalled()
})


test('should set sortBy to "AmountRising"', () => {
    const newValue = "AmountRising"
    wrapper.find('select').simulate('change', { target: newValue })
    expect(sortByAmount).toHaveBeenLastCalledWith(newValue)
})

test('should set both start and end date to new Values', () => {
    const startDate = 2
    const endDate = 6
    wrapper.find('DatePicker').at(0).simulate('change', {
        target: startDate
    })
    wrapper.find('DatePicker').at(1).simulate('change', {
        target: endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith({ target: startDate })
    expect(setEndDate).toHaveBeenLastCalledWith({ target: endDate })
})