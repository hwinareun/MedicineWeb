const { StatusCodes } = require("http-status-codes");
const query = require("../config/db");
const CustomError = require("../utils/CustomError");

const search = async (req, res, next) => {
    try {
        const {
            itemName,
            ingrEngName,
            ingrKorName,
            efcyQesitm,
            printFront,
            printBack,
            dosageForm,
            drugShape,
            colorClass1,
            colorClass2,
            linFront,
            lineBack
        } = req.query;

        let sql = `select DrugInfo.itemSeq as drugId, itemName, itemImage, ingrEngName, efcyQesitm, strength
                    from DrugInfo inner join DrugImageInfo on DrugInfo.itemSeq = DrugImageInfo.itemSeq 
                    left join DrugEtc on DrugInfo.itemSeq = DrugEtc.itemSeq
                    where 1=1`;
        const params = [];

        if (itemName) {
            sql += ' AND itemName LIKE ?';
            params.push(`%${itemName}%`);
        }
        if (ingrEngName) {
            sql += ' AND ingrEngName LIKE ?';
            params.push(`%${ingrEngName}%`);
        }
        if (ingrKorName) {
            sql += ' AND ingrKorName LIKE ?';
            params.push(`%${ingrKorName}%`);
        }
        if (efcyQesitm) {
            sql += ' AND efcyQesitm LIKE ?';
            params.push(`%${efcyQesitm}%`);
        }
        if (printFront) {
            sql += ' AND printFront LIKE ?';
            params.push(`%${printFront}%`);
        }
        if (printBack) {
            sql += ' AND printBack LIKE ?';
            params.push(`%${printBack}%`);
        }
        if (dosageForm) {
            sql += ' AND dosageForm LIKE ?';
            params.push(`%${dosageForm}%`);
        }
        if (drugShape) {
            sql += ' AND drugShape LIKE ?';
            params.push(`%${drugShape}%`);
        }
        if (colorClass1) {
            sql += ' AND colorClass1 LIKE ?';
            params.push(`%${colorClass1}%`);
        }
        if (colorClass2) {
            sql += ' AND colorClass2 LIKE ?';
            params.push(`%${colorClass2}%`);
        }
        if (linFront) {
            sql += ' AND lineFront LIKE ?';
            params.push(`%${linFront}%`);
        }
        if (lineBack) {
            sql += ' AND lineBack LIKE ?';
            params.push(`%${lineBack}%`);
        }

        const results = await query(sql, params);

        return res.status(StatusCodes.OK).json(results);
    } catch (error) {
        let statusCode;

        return next(new CustomError(error.message, statusCode));
    }
};

module.exports = { search };
