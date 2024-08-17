const { StatusCodes } = require("http-status-codes");

module.exports = (err, req, res, next) => {
  const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  return res.status(status).json({
    message: err.message,
    status: status,
  });
};
