// app.js
const express = require("express");

const app = express();
const SERVER_PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "Dheepasri";

// Serve an HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/views/products.html");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
  console.log(`Name : ${NAME}`);
});
