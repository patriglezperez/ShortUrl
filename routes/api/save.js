const router = require("express").Router();

//Obtener la URL que nos manda el usuario y guardarla en la db
router.post("/", require("../../controllers/saveNewUrl"));

module.exports = router;
