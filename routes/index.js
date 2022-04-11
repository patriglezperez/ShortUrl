const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello word");
});

router.use("/", require("./api/save"));
router.use("/", require("./api/find"));
router.use("/analytics", require("../controllers/findAllUrls"));
module.exports = router;
