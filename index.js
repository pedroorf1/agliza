const express = require("express")
const app = express()
require("./dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send({ message: "Bem vindo" })
})
app.listen(process.env.PORT, () => {
    console.log("Started")
})