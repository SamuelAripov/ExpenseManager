import { addExpense, startAddExpense, removeExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { firebase, database } from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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
            "id": expect.any(Number),
            "note": "hate this bank",
        },
        type: "ADD_EXPENSE"
    })
})

test('should add expense with all default values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
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

test('should add expense to database store', () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Gaming Mouse',
        amount: 30.59,
        note: 'Razer sucks',
        createdAt: 10
    }
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(Number),
                    ...expenseData
                }
            })
            return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
})

test('should add expense to database store with deafault values', () => {
    const store = createMockStore({})
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0    
    }
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(Number),
                    ...expenseData
                }
            })
            return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
})