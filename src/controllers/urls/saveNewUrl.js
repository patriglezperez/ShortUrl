const User = require("../../models/user");
const Url = require("../../models/urls");
const jwt = require("jsonwebtoken");

async function saveNewUrl(req, res) {
  // El usuario escribe una URL
  // if (req.body) {
  //   urlData = req.body.url;
  //   userId = req.body.userId;
  // }
  const urlData = req.body.url;

  /*you cannot create a note if you do not have the token*/
  const authorization = req.get("authorization");

  let token = "";
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, "123456789"); // cambiar por una variable process.env.SECRET
  } catch (e) {
    console.log(e);
  }

  console.log(decodedToken, "decodedtoken");
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const { id: userId } = decodedToken;

  const user = await User.findById(userId);

  //Creamos una nueva url

  const newUrl = new Url({
    fullUrl: urlData,
    user: user._id,
    date: new Date(),
  });

  console.log(newUrl, "newUrl");
  try {
    const savedUrl = await newUrl.save();
    user.urls = user.urls.concat(savedUrl._id);
    await user.save();
    res.json(savedUrl);
  } catch (error) {
    return console.log(error);
  }
}

module.exports = saveNewUrl;
