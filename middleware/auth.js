const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("No Token , authoriztion denied");
    }
    const decoded = jwt.verify(token, "jwtSecret");

    console.log("Middleware", decoded);

    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Token Invalid");
  }
};

exports.adminCheck = async(req, res, next) => {
  try {
    const { username } = req.user
    const adminUser = await User.findOne({ username }).exec()
    // console.log("admin user ")
    // console.log(adminUser.role)
    // console.log(adminUser.role != 'admin')
    if (adminUser.role != 'admin') {
      res.status(403).send(err, "Admin Access denied");
    } else {
      // console.log("do")
      next()
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("Admin Access denied");
  }
};
