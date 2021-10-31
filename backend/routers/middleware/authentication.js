const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(404).json({ success: flase, message: "Forbidden" });
    }

    const token = req.headers.authorization.split(" ").pop();

    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
      return  res
          .status(404)
          .json({ success: false, message: "The token is invalid or expire" });
      } else {
        req.token = result;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error!!`,
    });
  }
};

module.exports = authentication;