const jwt = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (err) {
      return res.status(404).json({ message: "Unauthorized" });
    }
    next();
  } else {
    return res.status(404).json({ message: "Unauthorized" });
  }
};
module.exports =  isAuthenticated ;
