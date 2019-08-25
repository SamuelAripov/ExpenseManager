import React from 'react'
import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'

export class AddExpensePage extends React.Component {
    render() {
        return (
            <div className='content-container'>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={(expense) => {
                        this.props.startAddExpense(expense)
                        this.props.history.push('/dashboard')
                        // location.reload()
                    }}
                />
            </div>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage)