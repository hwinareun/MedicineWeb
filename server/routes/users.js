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
const { joinValidator, loginValidator, userInfoValidator, } = require("../validators/authValidator");
const authenticateJWT = require("../middlewares/auth");

router.post("/join", joinValidator, validateHandler, createAccount);
router.delete("/resign", authenticateJWT, deleteAccount);
router.post("/login", loginValidator, validateHandler, login);
router.post("/logout", authenticateJWT, logout);
router.get("/profile", authenticateJWT, showProfile);
router.put("/userInfo", authenticateJWT, userInfoValidator, validateHandler, updateUserInfo);
router.post("/checkPwd", checkPassword);
router.post("/findId", findId);
router.post("/findPwd", findPassword);
router.post("/dupCheckName", checkNicknameDuplication);
router.post("/dupCheckId", checkIdDuplication);

module.exports = router;
