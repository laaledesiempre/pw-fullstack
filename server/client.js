import { hydrate } from 'preact'
import { HydratedApp } from '../src/HydratedApp.tsx'

hydrate(
    HydratedApp()
    , document.getElementById('app')
    )