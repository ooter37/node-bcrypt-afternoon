require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const authCtrl = require('./controllers/authController')

const app = express()
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: false
    })
)

massive(CONNECTION_STRING).then(db => {
    console.log(`connected to db`)
    app.set('db', db)
})

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT}`)
})

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)