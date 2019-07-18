//Higher Order Component (HOC) - A component that renders another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin ? <p>This is Private Info!!! Please do not share or copy!!!</p> : <p></p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (Component) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <Component {...props}/> : <p>Please LogIn to view the info.</p>}
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info) 
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='Hello There!' />, document.querySelector('#appDiv'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Hello There!' />, document.querySelector('#appDiv'))
