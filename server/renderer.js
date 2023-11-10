import { render } from 'preact-render-to-string';
import { StaticRouter } from "react-router-dom/server";
import { App } from '../src/app.tsx'

export const renderer = (req) =>{
    return render(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    )
}