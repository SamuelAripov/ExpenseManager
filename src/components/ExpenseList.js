import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getFilteredItems from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className='content-container'>
        {props.expenses.length !== 0 ? (
            <div className='list-header'>
                <div className='show-for-mobile'>Expenses</div>
                <div className='show-for-desktop'>Expense</div>
                <div className='show-for-desktop'>Amount</div>
            </div>
        ) : <span></span>}
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getFilteredItems(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)