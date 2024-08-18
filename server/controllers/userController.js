const bcrypt = require('bcryptjs');
const query = require('../config/db');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../utils/CustomError');

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

    try{
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);
    
        const sql = 'insert into Users (id, password, nickname, idQuestion, idAnswer, pwQuestion, pwAnswer) values (?, ?, ?, ?, ?, ?, ?);';
        const values = [id, hashPassword, nickname, idQuestion, idAnswer, pwQuestion, pwAnswer];

        const results = await query(sql, values);

        return res.status(StatusCodes.OK).json(results);
    } catch (error) {
        let statusCode;

        if(error.code === 'ER_DUP_ENTRY') {
            statusCode = StatusCodes.CONFLICT;
        } else if(error.message === 'All fields are required'){
            statusCode = StatusCodes.BAD_REQUEST;
        }

        const customError = new CustomError(error.message, statusCode);
        next(customError);
    }
};

const cancelAccount = async (req, res) => {
    // 회원 탈퇴
};

const login = async (req, res) => {
    // const { id, password } = req.body;

    // const sql = 'select * from Users where id = ?;';
    // const results = await query(sql, id);
    
    // const loginUser = results[0];
    // const isMatch = bcrypt.compare(password, loginUser.password);

    // if(!isMatch) {
    //     return res.status(StatusCodes.UNAUTHORIZED)
    // }
};  

const logout = async (req, res) => {

};

const showProfile = async (req, res) => {

};

const modifyProfile = async (req, res) => {

};

const checkPassword = async (req, res) => {

};

const findId = async (req, res) => {

};

const findPassword = async (req, res) => {

};

const checkNicknameDuplication = async (req, res) => {

};

const checkIdDuplication = async (req, res) => {

};

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
    checkIdDuplication
};