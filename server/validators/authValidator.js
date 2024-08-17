const { check } = require("express-validator");

const joinValidator = [
    check('id').notEmpty(),
    check('password').notEmpty(),
    check('nickname').notEmpty(),
    check('idQuestion').notEmpty(),
    check('idAnswer').notEmpty(),
    check('pwQuestion').notEmpty(),
    check('pwANswer').notEmpty()
];

// const loginValidator = [
//     check('id').notEmpty(),
//     check('password').notEmpty()
// ]

module.exports = {
    joinValidator,
    // loginValidator
};