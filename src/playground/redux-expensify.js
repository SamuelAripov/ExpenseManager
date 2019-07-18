import { createStore, combineReducers } from 'redux'
import uuid from 'uuidv4'
// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE
const sortByDate = (date) => ({
    type: 'SORT_BY_DATE',
    date
})
// SORT_BY_AMOUNT
const sortByAmount = (amount) => ({
    type: 'SORT_BY_AMOUNT',
    amount
})
// SET_START_DATE
const setStartDate = (startDate = 0) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate = 0) => ({
    type: 'SET_END_DATE',
    endDate
})
// Expenses Reducer

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return [
                ...state,
                action.expense
            ]
        }
        case 'REMOVE_EXPENSE': {
            return state.filter((expense) => expense.id !== action.id)
        }
        case 'EDIT_EXPENSE': {
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else
                    return expense
            })
        }

        default:
            return state;
    }
}
//Filter Reducer 
const filtersReducerDefaultState = { text: '', sortBy: 'amount', startDate: null, endDate: null }

const filtersReducer = (filter = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...filter,
                text: action.text
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...filter,
                sortBy: action.date
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...filter,
                sortBy: action.amount
            }
        }
        case 'SET_START_DATE': {
            return {
                ...filter,
                startDate: action.startDate
            }
        }
        case 'SET_END_DATE': {
            return {
                ...filter,
                endDate: action.endDate
            }
        }
        default:
            return filter
    }
}

const getFilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.includes(text)

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'Date') {
            return a.createdAt > b.createdAt ? -1 : 1
        } else if (sortBy === 'AmountDeclining') {
            return a.amount < b.amount ? -1 : 1
        }
        else if (sortBy === 'AmountRising') {
            return a.amount > b.amount ? -1 : 1
        }
    })
}

const store = createStore((
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
))

store.subscribe(() => {
    const state = store.getState()
    const filteredExpenses = getFilteredExpenses(state.expenses, state.filters)
    console.log(filteredExpenses)
})

const expenseTwo = store.dispatch(addExpense({ description: 'Gaming Monitor', amount: 259, createdAt: 5000 }))
const expenseOne = store.dispatch(addExpense({ description: 'Steam Gift Card', amount: 100, createdAt: 1000 }))

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }))
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 200 }))

// store.dispatch(setTextFilter('Gaming'))
store.dispatch(sortByAmount('AmountRising'))
// store.dispatch(sortByDate('Date'))

// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(2000))


const demoState = {
    expenses: [{
        id: 'esxdrcfvgbhnjkm,l',
        description: 'January Rent',
        note: 'Last month of rent',
        amount: 1100,
        createdAt: 0
    }],
    filters: {
        text: 'Rent',
        sortBy: 'date',
        startDate: null,
        endDate: null
    }
}