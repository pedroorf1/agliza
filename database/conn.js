const mongoose = require("mongoose");
try {
  // eslint-disable-next-line no-undef
  mongoose.connect(process.env.DbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.info("DB conectado!");
} catch (err) {
  console.info(err);
}
module.exports = mongoose;

