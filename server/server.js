const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

//Routers injection
const homeRouter = require('../src/routers/homeRouter')
const clientRouter = require('../src/routers/clientRouter')
const planRouter = require('../src/routers/planRouter')
const adminRouter = require('../src/admin/adminRouter')

server.use(homeRouter)
server.use("/client", clientRouter)
server.use("/plan", planRouter)
server.use("/admin", adminRouter)


module.exports = server