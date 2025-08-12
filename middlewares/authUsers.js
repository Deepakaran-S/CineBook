const jwt = require("jsonwebtoken");

function auth(roles = []) {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ msg: "Token Nto Provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ msg: "Access Denied" });
      }
      next();
    } catch (err) {
      res.status(401).json({ msg: "Invalid Token" });
    }
  };
}
module.exports = auth;