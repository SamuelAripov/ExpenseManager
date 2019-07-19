import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";
import numeral from 'numeral'

const ListItems = ({ id, description, amount, createdAt, note }) => {
    const now = moment(createdAt)
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>Expense | {description}</h3></Link>
            <p>Price | {numeral(amount).format('$0,0.00')}</p>
            <p>Spent on {now.format('MMM Do YYYY')}</p>
            {note ? <p>Note: {note}</p> : <p></p>}
            <br />
        </div>
    )
}
export default ListItems
