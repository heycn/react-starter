import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/global.css'
import '@/app.css'
import { App } from './App'

const div = document.getElementById('root')!
const app = ReactDOM.createRoot(div)

app.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
)
