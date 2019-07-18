import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should add an expense set all values', () => {
    const action = addExpense({
        id: 123,
        description: 'Bank',
        note: 'hate this bank',
        amount: 10000000000.01,
        createdAt: null
    })
    expect(action).toEqual({
        expense: {
            "amount": 10000000000.01,
            "createdAt": null,
            "description": "Bank",
            "id": expect.any(String),
            "note": "hate this bank",
        },
        type: "ADD_EXPENSE"
    })
})

test('should add expense with all default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        },
        type: "ADD_EXPENSE"
    })
})

test('should edit expense', () => {
    const action = editExpense(133, { name: 'Sam' })
    expect(action).toEqual({ "id": 133, "type": "EDIT_EXPENSE", "updates": { "name": "Sam" } })
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 123 })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 123
    })
})