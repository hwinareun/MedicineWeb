const { check } = require("express-validator");

const joinValidator = [
  check("id").notEmpty(),
  check("password").notEmpty(),
  check("nickname").notEmpty(),
  check("idQuestion").notEmpty(),
  check("idAnswer").notEmpty(),
  check("pwQuestion").notEmpty(),
  check("pwAnswer").notEmpty()
];

const loginValidator = [
  check("id").notEmpty(),
  check("password").notEmpty()
];

// const userInfoValidator = [
//   check("nickname").notEmpty(),
//   check("password").notEmpty()
// ];

const checkPwdIValidator = [
  check("password").notEmpty()
];

const dupCheckNicknameValidator = [
  check("nickname").notEmpty()
];

const dupCheckIdValidator = [
  check("id").notEmpty()
];

const findIdValidator = [
  check("nickname").notEmpty(),
  check("idQuestion").notEmpty(),
  check("idAnswer").notEmpty()
];

const requestResetPasswordValidator = [
  check("id").notEmpty(),
  check("pwQuestion").notEmpty(),
  check("pwAnswer").notEmpty()
];

const resetPasswordValidator = [
  check("password").notEmpty()
];

const addDrugValidator = [
  check("drugId").notEmpty(),
  check("itemName").notEmpty()
];

module.exports = {
  joinValidator,
  loginValidator,
  // userInfoValidator,
  checkPwdIValidator,
  dupCheckNicknameValidator,
  dupCheckIdValidator,
  findIdValidator,
  requestResetPasswordValidator,
  resetPasswordValidator,
  addDrugValidator
};
