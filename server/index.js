import express from 'express'
import compression from 'compression'
const path = require('path');
import renderer from './renderer.js'

const PORT = 3000

const app = express()
app.use(compression())

app.get('*', (req,res)=>{
    res.send(renderer(req))
})

app.get('/client.js', (req,res)=>{
    req.sendFile("./client.js", {root: path.join(__dirname)})//buildeado hay q mandarlo.
})

app.listen(PORT,console.log(`server on port ${PORT}`))
