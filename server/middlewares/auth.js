const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/CustomError");

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new CustomError("Authorization token is required.", StatusCodes.UNAUTHORIZED));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    return next();
  } catch (error) {
    return next(new CustomError("Invalid or expired token.", StatusCodes.BAD_REQUEST));
  }
};

const authorizationRole = (req, res, next) => {
  const role = req.user.role;

  if(role === 'user'){
    return next(new CustomError('You do not have permission.', StatusCodes.UNAUTHORIZED));
  }

  return next();
}


module.exports = {authenticateJWT, authorizationRole};
