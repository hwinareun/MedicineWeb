const bcrypt = require("bcryptjs");
const query = require("../config/db");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/CustomError");
const jwt = require("jsonwebtoken");

const createAccount = async (req, res, next) => {
  const { id, password, nickname, idQuestion, idAnswer, pwQuestion, pwAnswer } =
    req.body;

  try {
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const sql =
      "insert into Users (id, password, nickname, idQuestion, idAnswer, pwQuestion, pwAnswer) values (?)";
    const values = [
      id,
      hashPassword,
      nickname,
      idQuestion,
      idAnswer,
      pwQuestion,
      pwAnswer,
    ];

    await query(sql, [values]);

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.code === "ER_DUP_ENTRY") {
      statusCode = StatusCodes.CONFLICT;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const deleteAccount = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const sql = "delete from Users where userId = ?";
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
    const sql = "select * from Users where id = ?";
    const results = await query(sql, id);

    if (results.length === 0) {
      throw new Error("Invalid id or password.");
    }

    const loginUser = results[0];
    const isMatch = await bcrypt.compare(password, loginUser.password);

    if (!isMatch) {
      throw new Error("Invalid id or password.");
    }

    const payload = {
      userId: loginUser.userId,
      role: loginUser.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(StatusCodes.OK).json({ token: token });
  } catch (error) {
    let statusCode;

    if (error.message === "Invalid id or password.") {
      statusCode = StatusCodes.UNAUTHORIZED;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const showProfile = async (req, res, next) => {
  try {
    const { userId } = req.user;

    let sql = "select * from Users where userId = ?";
    let results = await query(sql, userId);
    const nickname = results[0].nickname;

    sql = "select drugId from Favorites where userId = ?";
    results = await query(sql, userId);

    if (results.length === 0) {
      results = [];
    } else {
      const values = [];

      results.forEach((v) => values.push(v.drugId));

      sql = `select DrugInfo.itemSeq as drugId, itemName, itemImage, ingrEngName, efcyQesitm, strength
          from DrugInfo inner join DrugImageInfo on DrugInfo.itemSeq = DrugImageInfo.itemSeq 
          left join DrugEtc on DrugInfo.itemSeq = DrugEtc.itemSeq
          where DrugInfo.itemSeq in (?)`;
      results = await query(sql, [values]);
    }

    return res.status(StatusCodes.OK).json({
      nickname: nickname,
      favorites: results,
    });
  } catch (error) {
    let statusCode;

    return next(new CustomError(error.message, statusCode));
  }
};

const updateUserInfo = async (req, res, next) => {
  const userId = Number(req.user.userId);
  const { nickname, password } = req.body;

  try {
    if (!(nickname || password)) {
      throw new Error("validate failed: nickname, password");
    }

    let sql = "update Users set";
    let values = [];

    let saltRound = 10;
    let hashPassword;

    if (nickname && !password) {
      sql += " nickname = ?";
      values.push(nickname);
    } else if (!nickname && password) {
      hashPassword = await bcrypt.hash(password, saltRound);
      sql += " password = ?";
      values.push(hashPassword);
    } else {
      hashPassword = await bcrypt.hash(password, saltRound);
      sql += " nickname = ?, password = ?";
      values.push(nickname, hashPassword);
    }

    sql += " where userId = ?";
    values.push(userId);

    await query(sql, values);

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === "validate failed: nickname, password") {
      statusCode = StatusCodes.BAD_REQUEST;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const checkPassword = async (req, res, next) => {
  const { userId } = req.user;
  const { password } = req.body;

  try {
    const sql = "select * from Users where userId = ?";
    const results = await query(sql, userId);

    const loginUser = results[0];
    const isMatch = await bcrypt.compare(password, loginUser.password);

    if (!isMatch) {
      throw new Error("Invalid id or password.");
    }

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === "Invalid id or password.") {
      statusCode = StatusCodes.UNAUTHORIZED;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const findId = async (req, res, next) => {
  const { nickname, idQuestion, idAnswer } = req.body;

  try {
    const sql =
      "select * from Users where nickname = ? and idQuestion = ? and idAnswer = ?";
    const values = [nickname, idQuestion, idAnswer];
    const results = await query(sql, values);

    if (results.length === 0) {
      throw new Error("User does not exist.");
    }

    const user = results[0];

    return res.status(StatusCodes.OK).json({ id: user.id });
  } catch (error) {
    let statusCode;

    if (error.message === "User does not exist.") {
      statusCode = StatusCodes.NOT_FOUND;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const requestResetPassword = async (req, res, next) => {
  const { id, pwQuestion, pwAnswer } = req.body;

  try {
    const sql =
      "select * from Users where id = ? and pwQuestion = ? and pwAnswer = ?";
    const values = [id, pwQuestion, pwAnswer];
    const results = await query(sql, values);

    if (results.length === 0) {
      throw new Error("User does not exist.");
    }

    const user = results[0];

    return res.status(StatusCodes.OK).json({ id: user.id });
  } catch (error) {
    let statusCode;

    if (error.message === "User does not exist.") {
      statusCode = StatusCodes.NOT_FOUND;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const resetPassword = async (req, res, next) => {
  const { id, password } = req.body;

  try {
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const sql = "update Users set password = ? where id = ?";
    const values = [hashPassword, id];
    await query(sql, values);

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    return next(new CustomError(error.message, statusCode));
  }
};

const checkNicknameDuplication = async (req, res, next) => {
  const { nickname } = req.body;

  try {
    const sql = "select * from Users where nickname = ?";
    const results = await query(sql, nickname);
    if (results.length) {
      throw new Error("Nickname is already in use.");
    }

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === "Nickname is already in use.") {
      statusCode = StatusCodes.CONFLICT;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const checkIdDuplication = async (req, res, next) => {
  const { id } = req.body;

  try {
    const sql = "select * from Users where id = ?";
    const results = await query(sql, id);
    if (results.length) {
      throw new Error("Id is already in use.");
    }

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === "Id is already in use.") {
      statusCode = StatusCodes.CONFLICT;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

module.exports = {
  createAccount,
  deleteAccount,
  login,
  showProfile,
  updateUserInfo,
  checkPassword,
  findId,
  requestResetPassword,
  resetPassword,
  checkNicknameDuplication,
  checkIdDuplication,
};
