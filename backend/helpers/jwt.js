// importin jwt
const jwt = require("jsonwebtoken");

const generateJWT = (uid) => {
  // create a new promise
  return new Promise((resolve, reject) => {
    jwt.sign(
      { uid },
      process.env.SECRET_JWT_SEED,
      { expiresIn: "24h" },
      (err, token) => {
        // check for errors
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyToken = (token) => {
  return new Promise(( resolve, reject )=>{
    jwt.verify( 
      token, 
      process.env.SECRET_JWT_SEED,
      (err, token) => {
        // check for errors
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }  
      });
  });
};

module.exports = { generateJWT, verifyToken };
// 