// const passport = require("passport");
const router = require("express").Router();

//Iniciar sesion
router.post("/login", require("../controllers/users/login"));

//Registro de usuarios
router.post("/signUp", require("../controllers/users/signUp"));

//Ver todos los usuarios
router.get("/", require("../controllers/users/allUsers"));

module.exports = router;
