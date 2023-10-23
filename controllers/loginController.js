const jwt = require("jsonwebtoken"); // Import the jwt library
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

function GenerateToken(user) {
  const payload = {
    role: user.role,
    id: user._id,
  };
  const token = jwt.sign(payload, "Random");
  return token;
}

async function login(req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });
    var isMatch = false;
    if (password === user.password) isMatch = true;
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
    var token = GenerateToken(user);
    return res.status(200).json({
      message: "Logged in successfully",
      username: username,
      fullname: user.firstName + " " + user.lastName,
      userid: user._id,
      token: token,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

module.exports = {
  loginUser,
  login,
};
