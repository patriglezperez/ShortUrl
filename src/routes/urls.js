const router = require("express").Router();

//Add the URL sent to us by the user and save it in the
router.post("/add", require("../controllers/urls/saveNewUrl"));

//Search all urls
router.use("/analytics", require("../controllers/urls/findAllUrls"));

//Search for the short URL and find the long Url
router.get("/find/:shortUrl", require("../controllers/urls/findFullUrl"));
module.exports = router;
