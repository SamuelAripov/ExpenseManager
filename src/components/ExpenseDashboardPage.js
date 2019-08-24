import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import TotalCounter from '../components/TotalCounter'

const ExpenseDashboardPage = () => (
    <div>
        <TotalCounter/>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage