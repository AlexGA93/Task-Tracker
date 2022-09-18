const { Router } = require("express");
const { check } = require("express-validator");

// controllers
const {
  authenticateUser,
  registerUser,
  tokenValidator,
  getUser
} = require("../../controllers/auth/auth.controller");

// middlewares
const { validateJWT } = require("../../middlewares/validate-jwt.midleware");
const {
  validateFields,
} = require("../../middlewares/validate-fields.middleware");

const router = Router();

// user authentication  - login
router.post(
  // path
  "/login",
  // validations
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password must be longer than 6 characters").isLength({
      min: 6,
    }),
  ],
  // controllers
  authenticateUser
);

// user registretion    - register
router.post(
  // path
  "/register",
  // validations
  [
    check("name", "Must provide a first name").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password must be longer than 6 characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  // controllers
  registerUser
);

// get user data
router.get(
  
  // path
  "/",
  // validations
  validateJWT,
  // controller
  getUser
)

// Validate Token
router.get("/renew", validateJWT, tokenValidator);

module.exports = router;
