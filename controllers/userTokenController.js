const jwt = require("jsonwebtoken"); // Import the jwt library
function GenerateToken(user) {
  const payload = {
    role: user.role,
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  return token;
}
