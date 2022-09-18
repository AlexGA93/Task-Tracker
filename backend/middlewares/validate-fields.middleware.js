const { request, response } = require("express");
const { validationResult } = require("express-validator");

const validateFields = (req = request, res = response, next) => {
  // deal with express validations
  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      // .mapped() -> an object where the keys are the field names, and the values are the validation errors
      errors: errors.mapped(),
    });
  }
  // If there isn't any error, proceed with the next middleware or controller
  next();
};

module.exports = { validateFields };
