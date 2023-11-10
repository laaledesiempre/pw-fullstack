import { render } from 'preact'
import { App } from './app.tsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('app')!)
