const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/userController");
const validateHandler = require("../middlewares/validateHandler");
const { joinValidator, loginValidator, } = require("../validators/authValidator");
const authenticateJWT = require("../middlewares/auth");

router.post("/join", joinValidator, validateHandler, createAccount);
router.delete("/resign", authenticateJWT, cancelAccount);
router.post("/login", loginValidator, validateHandler, login);
router.post("/logout", authenticateJWT, logout);
router.get("/profile", authenticateJWT, showProfile);
router.put("/profile", authenticateJWT, modifyProfile);
router.post("/checkPwd", checkPassword);
router.post("/findId", findId);
router.post("/findPwd", findPassword);
router.post("/dupCheckName", checkNicknameDuplication);
router.post("/dupCheckId", checkIdDuplication);

module.exports = router;
