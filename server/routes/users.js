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

router.post('/join', createAccount);
router.delete('/resign', cancelAccount);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', showProfile);
router.put('/profile', modifyProfile);
router.post('/checkPwd', checkPassword);
router.post('/findId', findId);
router.post('/findPwd', findPassword);
router.post('/dupCheckName', checkNicknameDuplication);
router.post('/dupCheckId', checkIdDuplication);

module.exports = router;