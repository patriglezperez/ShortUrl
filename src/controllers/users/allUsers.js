const User = require("../../models/user");

async function allUsers(req, res) {
  const result = await User.find({});
  try {
    result;
    return res.send({ result });
  } catch (error) {
    return res.send({ error: "Sorry, this user doesn´t exist yet" });
  }
}

module.exports = allUsers;
