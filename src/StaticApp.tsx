import { StaticRouter } from "react-router-dom/server";
import { App } from '../src/app.tsx'

export const StaticApp =()=>{
        return( 
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>)}