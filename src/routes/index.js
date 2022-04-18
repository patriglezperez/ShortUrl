const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello word");
});

router.use("/", require("./save"));
router.use("/", require("./find"));
router.use("/analytics", require("../controllers/findAllUrls"));
module.exports = router;
