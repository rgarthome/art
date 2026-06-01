const express = require("express");
const path = require("path");
const { productsApiHandler } = require("./api/products");

const app = express();

app.use(express.static(__dirname));

app.get("/api/products", productsApiHandler);
app.get("/.netlify/functions/products", productsApiHandler);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Art Home rulează pe portul " + PORT);
});
