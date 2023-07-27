import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { default as AppContainer, default as MainApp } from './App'
import './index.css'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MainApp />)
