const EXPIRES_IN_SECONDS = 60 * 24 * 30 * 12 * 60; // 360 days
const SECRET_KEY =
  "EtU0USaA9KlVjnbWVQSjsR6r0eQdn7DMbGA3rVj8ijTHE9Dm8dS7i2dmP9KjQER";
var jwt = require("jsonwebtoken");
const ALGORITHM = "HS256";

module.exports = {
  createToken(user) {
    return jwt.sign({ user: user.username }, SECRET_KEY, {
      algorithm: ALGORITHM,
      expiresIn: EXPIRES_IN_SECONDS,
    });
  },
  verifyToken(token){
      return jwt.verify(token,SECRET_KEY)
  }
};
