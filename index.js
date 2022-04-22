//Require
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
// const flash = require("connect-flash");
//Init
const app = express();
// require("./src/controllers/passport");

//Middelware
app.use(bodyParser.urlencoded({ extended: false })); //porque vamos a obtener nuestros datos de un formulario
app.use(bodyParser.json());
app.use(cors());
// app.use(
//   session({
//     secret: "mysecretapp",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
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

// //Global variables
// app.use((req, res, next) => {
//   res.locals.error = req.flash("error");
// });

//Routes
app.use("/api", require("./src/routes"));

//Port
const port = 3001;
app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
