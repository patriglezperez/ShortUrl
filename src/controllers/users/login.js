const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { body } = req;
  const { username, password } = body;
  console.log(username, "username");
  console.log(password, "password");
  const user = await User.findOne({ username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    res.status(401).json({
      error: "invalid user or password",
    });
  }

  const userForToken = {
    id: user._id,
    username: user.username,
  };

  const token = jwt.sign(userForToken, "123456789"); //Meterlo en una variable

  res.send({
    username: user.username,
    email: user.email,
    token,
  });
}

module.exports = login;
