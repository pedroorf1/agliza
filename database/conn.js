const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.DbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.info("DB conectado!")

} catch(err) {
    console.info(err)
}

module.exports = mongoose

