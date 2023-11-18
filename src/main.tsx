import ReactDOM from 'react-dom/client'
import '@/global.css'
import { App } from './App'

const div = document.getElementById('root')!
const app = ReactDOM.createRoot(div)

app.render(<App />)
