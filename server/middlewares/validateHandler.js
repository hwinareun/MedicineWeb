const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/CustomError");

const validateHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const errorMessages = errors.array().map((err) => err.path).join(", ");

  return next(new CustomError(`validate failed: ${errorMessages}`, StatusCodes.BAD_REQUEST));
};

module.exports = validateHandler;
