import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainRouter from './routers/MainRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import "react-datepicker/dist/react-datepicker.css"

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <MainRouter />
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#appDiv'))