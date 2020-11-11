// React import
import React from 'react'

// Third party import
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Local import
import './assets/css/global.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
