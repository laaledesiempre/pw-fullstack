import { hydrate } from 'preact'
import { HydratedApp } from '../src/HydratedApp'

hydrate(
    HydratedApp()
    , document.getElementById('app')
    )
