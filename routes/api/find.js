const router = require("express").Router();

//Buscar la URL corta y encontrar la Url larga

router.get("/:shortUrl", require("../../controllers/findFullUrl"));

module.exports = router;
