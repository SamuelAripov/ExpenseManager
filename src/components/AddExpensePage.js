import React from 'react'
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'

export class AddExpensePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={(expense) => {
                        this.props.addExpense(expense)
                        this.props.history.push('/')
                    }}
                />
            </div>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage)