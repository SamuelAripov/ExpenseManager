import expenseReducer from '../../reducers/expenses'
import currentState from "../fixtures/expenses";
test('should set up default expense values', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should add expenses to the array', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: '4',
            note: '',
            amount: 0,
            createdAt: 4
        }
    }
    const res = expenseReducer(currentState, action)
    expect(res).toEqual([...currentState, {
        id: 4,
        description: '4',
        note: '',
        amount: 0,
        createdAt: 4
    }])
})
test('should remove an expense from the list', () => {
    const action = { type: 'REMOVE_EXPENSE', id: currentState[0].id }
    const res = expenseReducer(currentState, action)
    expect(res).toEqual([currentState[1], currentState[2]])
})
test('should not remove an expense from the list if id is not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '1a' }
    const res = expenseReducer(currentState, action)
    expect(res).toEqual([...currentState])
})
test('should edit expense', () => {
    const action = { type: 'EDIT_EXPENSE', id: 2, updates: {description: 'new2'}}
    const res = expenseReducer(currentState, action)
    expect(res[1].description).toBe('new2')
})
