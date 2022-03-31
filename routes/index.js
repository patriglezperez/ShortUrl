const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello word");
});

router.use("/", require("./api/save"));
router.use("/redirect", require("./api/find"));

module.exports = router;
