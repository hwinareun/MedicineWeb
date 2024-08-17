const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/CustomError");

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        return next();
    }
    console.log(errors);
    // const errorMessages = errors.array().map(err => err.msg).join(',');
    return next(new CustomError(`validate failed: ${errors.errors}`, StatusCodes.BAD_REQUEST));
};

module.exports = validator;