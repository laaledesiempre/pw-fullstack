import {BrowserRouter} from 'react-router-dom'
import {App} from './app.tsx'

export const HydratedApp =()=>{
    return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    )
}