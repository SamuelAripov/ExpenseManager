import React from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";
import numeral from 'numeral'

const ListItems = ({ id, description, amount, createdAt, note }) => {
    const now = moment(createdAt)
    return (
        <div>
            <Link className='list-item' to={`/edit/${id}`}>
                <div>
                    <h3 className="list-item__title">Expense | {description}</h3>
                    <span className="list-item__sub-title">Spent on {now.format('MMM Do YYYY')}</span>
                </div>
                <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
            </Link>
        </div>
    )
}
export default ListItems
// {note ? <p>Note: {note}</p> : <p></p>}