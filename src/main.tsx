import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('app')!)
