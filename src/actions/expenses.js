import database from '../firebase/firebase';
import { get } from 'http';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref(`users/${uid}/expenses`).push(expense).then(({ ref }) => {
            console.log(ref)
            dispatch(addExpense({
                id: expense.key,
                ...expense
            }))
        })
    }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})
export const clearExpenses = () => ({
    type: 'CLEAR_EXPENSES'
})
export const startSetExpense = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        dispatch(clearExpenses())
        return database
            .ref(`users/${uid}/expenses/`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    dispatch(addExpense({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    }))
                    console.log('Official Data', {
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })
            }).catch(e => console.log(e))
    }
}
export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense({ id }))
            })
    }
}
export const startEditExpense = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database
            .ref(`users/${uid}/expenses/${id}`)
            .update({
                ...update
            })
            .then(() => {
                dispatch(editExpense(id, update))
            })
    }
}

