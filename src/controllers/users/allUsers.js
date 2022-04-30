const User = require("../../models/user");

async function allUsers(req, res) {
  const result = await User.find({}).populate("urls", {
    fullUrl: 1,
    date: 1,
    shortUrl: 1,
  });
  try {
    result;
    return res.send({ result });
  } catch (error) {
    return res.send({ error: "Sorry, this user doesn´t exist yet" });
  }
}

module.exports = allUsers;
