import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainRouter, { history } from './routers/MainRouter'

import "react-datepicker/dist/react-datepicker.css"
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import { startSetExpense } from './actions/expenses'
import { firebase } from './firebase/firebase'
import configureStore from './store/configureStore'
import { login, logout} from './actions/auth'

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
)

let rendered = false
const renderApp = () => {
    if (!rendered) {
        ReactDOM.render(jsx, document.querySelector('#appDiv'))
        rendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.querySelector('#appDiv'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(() => {
            if(history.location.pathname === '/')
                history.push('/dashboard')
            renderApp()
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})