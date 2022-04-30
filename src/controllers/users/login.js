const User = require("../../models/user");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  const { body } = req;
  const { username, password } = body;
  console.log(username, "username");
  console.log(password, "password");
  const user = await User.findOne({ username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!passwordCorrect) {
    res.status(401).json({
      error: "invalid user or password",
    });
  }

  res.send({
    username: user.username,
    email: user.email,
  });
}

module.exports = login;
