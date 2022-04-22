const User = require("../../models/user");
const bcrypt = require("bcryptjs");

async function signUp(req, res) {
  const { body } = req;
  const { username, email, password } = body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    email,
    passwordHash,
  });

  const savedUser = await user.save();
  res.json(savedUser);
}

module.exports = signUp;
