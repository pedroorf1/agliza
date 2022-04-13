const express = require("express");
const app = express();
require("dotenv").config();
const server = require("./server/server");

app.use(server);
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});