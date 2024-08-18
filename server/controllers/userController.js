const bcrypt = require("bcryptjs");
const query = require("../config/db");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/CustomError");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const createAccount = async (req, res, next) => {
  const {
    id,
    password,
    nickname,
    idQuestion,
    idAnswer,
    pwQuestion,
    pwAnswer
  } = req.body;

  try {
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const sql = "insert into Users (id, password, nickname, idQuestion, idAnswer, pwQuestion, pwAnswer) values (?, ?, ?, ?, ?, ?, ?);";
    const values = [
      id,
      hashPassword,
      nickname,
      idQuestion,
      idAnswer,
      pwQuestion,
      pwAnswer,
    ];

    const results = await query(sql, values);

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.code === "ER_DUP_ENTRY") {
      statusCode = StatusCodes.CONFLICT;
    } else if (error.message === "All fields are required.") {
      statusCode = StatusCodes.BAD_REQUEST;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const cancelAccount = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const sql = "delete from Users where userId = ?;";
    const results = await query(sql, userId);
    if (results.affectedRows === 0) {
      throw new Error("User does not exist.");
    }

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === "User does not exist.") {
      statusCode = StatusCodes.NOT_FOUND;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const login = async (req, res, next) => {
  const { id, password } = req.body;

  try {
    const sql = "select * from Users where id = ?;";
    const results = await query(sql, id);

    const loginUser = results[0];
    const isMatch = await bcrypt.compare(password, loginUser.password);

    if (!isMatch) {
      throw new Error("invalid id or password.");
    }

    const token = jwt.sign({
      userId: loginUser.userId,
      nickname: loginUser.nickname,
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    req.session.jwtToken = token;

    return res.status(StatusCodes.OK).json({ jwtToken: req.session.jwtToken });
  } catch (error) {
    let statusCode;

    if (error.message === "Invalid id or password.") {
      statusCode = StatusCodes.UNAUTHORIZED;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const logout = async (req, res) => {
  await req.session.destroy(error => {
    if(error) {
      return next(new CustomError('Failed to logout.', StatusCodes.INTERNAL_SERVER_ERROR));
    }
  });

  return res.status(StatusCodes.OK).end();
};

const showProfile = async (req, res) => { };

const modifyProfile = async (req, res) => { };

const checkPassword = async (req, res) => { };

const findId = async (req, res) => { };

const findPassword = async (req, res) => { };

const checkNicknameDuplication = async (req, res) => { };

const checkIdDuplication = async (req, res) => { };

module.exports = {
  createAccount,
  cancelAccount,
  login,
  logout,
  showProfile,
  modifyProfile,
  checkPassword,
  findId,
  findPassword,
  checkNicknameDuplication,
  checkIdDuplication,
};
