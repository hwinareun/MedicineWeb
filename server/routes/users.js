const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/userController");
const validateHandler = require("../middlewares/validateHandler");
const {
  joinValidator,
  loginValidator,
  checkPwdIValidator,
  dupCheckNicknameValidator,
  dupCheckIdValidator,
  findIdValidator,
  requestResetPasswordValidator,
  resetPasswordValidator
} = require("../validators/authValidator");
const {authenticateJWT} = require("../middlewares/auth");

router.post("/join", joinValidator, validateHandler, createAccount);
router.delete("/resign", authenticateJWT, deleteAccount);
router.post("/login", loginValidator, validateHandler, login);
router.get("/profile", authenticateJWT, showProfile);
router.put("/userInfo", authenticateJWT, updateUserInfo);
router.post("/checkPwd", authenticateJWT, checkPwdIValidator, validateHandler, checkPassword);
router.post("/findId", findIdValidator, validateHandler, findId);
router.post("/resetPassword", requestResetPasswordValidator, validateHandler, requestResetPassword);
router.put("/resetPassword", resetPasswordValidator, validateHandler, resetPassword);
router.post("/dupCheckNickname", dupCheckNicknameValidator, validateHandler, checkNicknameDuplication);
router.post("/dupCheckId", dupCheckIdValidator, validateHandler, checkIdDuplication);

module.exports = router;
