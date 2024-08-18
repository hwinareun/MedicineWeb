const express = require("express");
const router = express.Router();
const {
  createAccount,
  deleteAccount,
  login,
  logout,
  showProfile,
  updateUserInfo,
  checkPassword,
  findId,
  findPassword,
  checkNicknameDuplication,
  checkIdDuplication,
} = require("../controllers/userController");
const validateHandler = require("../middlewares/validateHandler");
const {
  joinValidator,
  loginValidator,
  userInfoValidator,
  checkPwdIValidator
} = require("../validators/authValidator");
const authenticateJWT = require("../middlewares/auth");

router.post("/join", joinValidator, validateHandler, createAccount);
router.delete("/resign", authenticateJWT, deleteAccount);
router.post("/login", loginValidator, validateHandler, login);
router.post("/logout", authenticateJWT, logout);
router.get("/profile", authenticateJWT, showProfile); // 추후 작업예정 drug, favorite 이후
router.put("/userInfo", authenticateJWT, userInfoValidator, validateHandler, updateUserInfo);
router.post("/checkPwd", authenticateJWT, checkPwdIValidator, validateHandler, checkPassword);
router.post("/findId", validateHandler, findId); // 아이디 로직문제로 나중에 의논 후 재설정
router.post("/findPwd", findPassword); // 이이디와 같은 브랜치 작업예정이므로 추후 구현 예정
router.post("/dupCheckName", checkNicknameDuplication);
router.post("/dupCheckId", checkIdDuplication);

module.exports = router;
