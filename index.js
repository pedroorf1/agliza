const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send({ message: "Bem vindo" })
})
app.listen(3500, () => {
    console.log("Started")
})