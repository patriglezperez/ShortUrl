// const passport = require("passport");
const router = require("express").Router();
//Iniciar sesion
// router.get("/users/signin", require("../controllers/users/signIn"));

//Registro de usuarios
router.post("/signUp", require("../controllers/users/signUp"));

//Ver todos los usuarios
router.get("/", require("../controllers/users/allUsers"));

module.exports = router;
