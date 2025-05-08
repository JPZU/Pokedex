const express = require("express");
const app = express();
const pokeneaRoutes = require("./routes/PokeneaRoutes");

app.use(express.json());
app.use("/pokenea/api", pokeneaRoutes);

module.exports = app;
