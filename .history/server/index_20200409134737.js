require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const app = express()
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(express.json())

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})