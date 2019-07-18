import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expense Manager</h1>
        <NavLink activeClassName="is-active" to='/' exact={true}>Dashboard</NavLink>
        <span>   </span>
        <NavLink activeClassName="is-active" to='/create'>Create Expense</NavLink>
        <span>   </span>
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink>
    </header>
)

export default Header