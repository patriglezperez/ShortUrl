const router = require("express").Router();

//Añadir la URL que nos manda el usuario y guardarla en la db
router.post("/add", require("../controllers/saveNewUrl"));

//Buscar todas las urls
router.use("/analytics", require("../controllers/findAllUrls"));

//Eliminar una Url
router.delete("/:shortUrl", require("../controllers/deleteUrl"));
// //El usuario va a  poder crear una nueva url
// router.use("/urls/add ", require("../controllers/findAllUrls"));

// //Buscar la URL corta y encontrar la Url larga (???)
// router.get("/:shortUrl", require("../controllers/findFullUrl"));

module.exports = router;
