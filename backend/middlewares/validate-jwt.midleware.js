const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req = request, res = response, next) => {
  const readedToken = req.header("x-token");

  if (!readedToken) {
    return res.status(401).json({
      process_ok: false,
      msg: "Error with token",
    });
  }

  try {
    // token validation
    const { uid, name } = jwt.verify(readedToken, process.env.SECRET_JWT_SEED);
    // set id and name to the request that will be used in the controller
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      process_ok: false,
      msg: "Invalid Token",
    });
  }

  next();
};

module.exports = { validateJWT };
