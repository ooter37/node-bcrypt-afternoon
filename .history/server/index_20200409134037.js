require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const app = express()
const port = 4000

app.use(express.json())