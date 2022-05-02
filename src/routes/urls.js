const router = require("express").Router();
const userExtractor = require("../middleware/userExtractor");

//Añadir la URL que nos manda el usuario y guardarla en la db
router.post("/add", userExtractor, require("../controllers/urls/saveNewUrl"));

//Buscar todas las urls
router.use("/analytics", require("../controllers/urls/findAllUrls"));

//Eliminar una Url
router.delete(
  "/:shortUrl",
  userExtractor,
  require("../controllers/urls/deleteUrl")
);

//Buscar la URL corta y encontrar la Url larga
router.get("/find/:shortUrl", require("../controllers/urls/findFullUrl"));

module.exports = router;
