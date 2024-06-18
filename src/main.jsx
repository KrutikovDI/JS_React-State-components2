import React from 'react'
import ReactDOM from 'react-dom/client'
import { Store } from './Store.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
)
