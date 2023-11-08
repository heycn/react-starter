import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/global.css'
import { App } from './App'
import { router } from '@/router/router'

const div = document.getElementById('root')!
const app = ReactDOM.createRoot(div)

app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
