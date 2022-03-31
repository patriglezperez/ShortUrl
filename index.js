//Require
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Init
const app = express();

//Body parser middelware
app.use(bodyParser.urlencoded({ extended: false })); //porque vamos a obtener nuestros datos de un formulario
app.use(bodyParser.json());

//Database
const mongoURI = "mongodb://localhost:27017/shortUrl";

//Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

//Routes
app.use("/api", require("./routes"));

//Port
const port = 3000;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});