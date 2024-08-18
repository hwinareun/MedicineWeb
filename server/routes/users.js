const express = require('express');
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
    checkIdDuplication
} = require('../controllers/userController');
const validator = require('../middlewares/validateHandler');
const { joinValidator, loginValidator } = require('../validators/authValidator');

router.post('/join', joinValidator, validator, createAccount);
router.delete('/resign', cancelAccount);
router.post('/login', loginValidator, validator, login);
router.post('/logout', logout);
router.get('/profile', showProfile);
router.put('/profile', modifyProfile);
router.post('/checkPwd', checkPassword);
router.post('/findId', findId);
router.post('/findPwd', findPassword);
router.post('/dupCheckName', checkNicknameDuplication);
router.post('/dupCheckId', checkIdDuplication);

module.exports = router;