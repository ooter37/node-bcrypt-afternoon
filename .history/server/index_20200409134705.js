require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const app = express()
const port = 4000
const {CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})