const User = require("../models/user");

async function loginUser(req, res) {
  try {
    const username = req.body["username"];
    const password = req.body["password"];
    const users = await User.find({ username: username, password: password });
    res.send(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  loginUser,
};
