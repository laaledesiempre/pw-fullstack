import { render } from 'preact-render-to-string';
import { StaticApp } from '../src/StaticApp.tsx'
import {h} from 'preact'

export const renderer = (req) =>{
    return render(h(StaticApp)
    )
}
