import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'
import moment from "moment";

const ListItems = ({ dispatch, id, description, amount, createdAt, note }) => {
    const now = moment(createdAt)
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>Expense | {description}</h3></Link>
            <p>Price | ${amount}</p>
            <p>Spent on {now.format('MMM Do YYYY')}</p>
            {note ? <p>Note: {note}</p> : <p></p>}
            <br />
        </div>
    )
}

export default ListItems
// export default connect()(ListItems)
// <button onClick={() => dispatch(removeExpense({ id }))}>Remove Expense</button>
