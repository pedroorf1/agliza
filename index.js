const express = require("express")
const app = express()
require("dotenv").config()
const server = require('./server/server')

app.use(server)

app.listen(process.env.PORT, () => {
    console.log("Started")
})