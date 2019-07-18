import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]}/>)
})

test('should render Edit Expense Page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
test('should edit expense and then save it', () => {
    const expenseToSubmit = expenses[1]
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseToSubmit)
    expect(editExpense).toHaveBeenLastCalledWith(expenseToSubmit.id, expenseToSubmit)
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should remove and expense', () => {
    const expenseToSubmit = expenses[1]
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({id: 2})
    expect(history.push).toHaveBeenLastCalledWith('/')
})