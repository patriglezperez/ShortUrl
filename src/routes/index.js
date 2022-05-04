const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Hello word");
}); // router.use("/", require("./save"));
router.use("/urls", require("./urls"));
// router.use("/users", require("./users"));
module.exports = router;
