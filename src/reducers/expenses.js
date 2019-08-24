// Expenses Reducer
import database from '../firebase/firebase'

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            console.log(action.expense)
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
        case 'SET_EXPENSES': {
            return action.expenses
        }
        case 'CLEAR_EXPENSES': {
            return []
        }
        default:
            return state;
    }
}