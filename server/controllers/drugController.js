const { StatusCodes } = require('http-status-codes');
const axios = require('axios');
const query = require('../config/db');
const {
  drugInfoFilter,
  drugImageInfoFilter,
  drugEtcFilter
} = require('../utils/drugDataFilter');
const getDifferenceByKeyAndToArray = require('../utils/getDifferenceByKey');
const getCommonByKey = require('../utils/getCommonByKey');
const CustomError = require("../utils/CustomError");
const removeDuplicateObjects = require('../utils/removeDuplicateObjects');

const getDrugDetail = async (req, res, next) => {
  try {
    const itemSeq = Number(req.params.drugId);

    const sql = `select DrugInfo.itemSeq as drugId, itemName, efcyQesitm, useMethodQesitm, seQesitm, depositMethodQesitm, itemImage,
                printFront, printBack, drugShape, colorClass1, colorClass2, lineFront, lineBack,
                ingrEngName, ingrKorName, dosageForm, strength
                from DrugInfo inner join DrugImageInfo on DrugInfo.itemSeq = DrugImageInfo.itemSeq 
                left join DrugEtc on DrugInfo.itemSeq = DrugEtc.itemSeq
                where DrugInfo.itemSeq = ?`;

    const results = await query(sql, itemSeq);

    return res.status(StatusCodes.OK).json(results[0]);
  } catch (error) {
    let statusCode;

    return next(new CustomError(error.message, statusCode));
  }
};

const addDrug = async (req, res, next) => {
  const {
    drugId,
    itemName,
    efcyQesitm,
    useMethodQesitm,
    seQesitm,
    depositMethodQesitm,
    itemImage,
    printFront,
    printBack,
    drugShape,
    colorClass1,
    colorClass2,
    lineFront,
    lineBack,
    ingrEngName,
    ingrKorName,
    dosageForm,
    strength
  } = req.body;
  const itemSeq = Number(drugId);

  try {
    let sql = 'select * from DrugInfo where itemSeq = ?';
    let results = await query(sql, itemSeq);
    if (results.length !== 0) {
      throw new Error('The drugId already exists.');
    }

    sql = 'insert into DrugInfo (itemSeq, itemName, efcyQesitm, useMethodQesitm, seQesitm, depositMethodQesitm, itemImage) values (?)';
    let values = [itemSeq, itemName, efcyQesitm, useMethodQesitm, seQesitm, depositMethodQesitm, itemImage];
    await query(sql, [values]);
    console.log('DrugInfo 추가 완료');

    sql = 'insert into DrugImageInfo (itemSeq, printFront, printBack, drugShape, colorClass1, colorClass2, lineFront, lineBack) values (?)';
    values = [itemSeq, printFront, printBack, drugShape, colorClass1, colorClass2, lineFront, lineBack];
    await query(sql, [values]);
    console.log('DrugImageInfo 추가 완료');

    sql = 'select * from DrugEtc where itemSeq = ?';
    results = await query(sql, itemSeq);
    if (results.length !== 0) {
      sql = `update DrugEtc 
            set ingrEngName = ?, ingrKorName = ?, dosageForm = ?, strength = ? 
            where itemSeq = ?`;
      values = [ingrEngName, ingrKorName, dosageForm, strength, itemSeq];
    } else {
      sql = 'insert into DrugEtc (itemSeq, ingrEngName, ingrKorName, dosageForm, strength) values (?, ?, ?, ?, ?)';
      values = [itemSeq, ingrEngName, ingrKorName, dosageForm, strength];
    }
    await query(sql, values);
    console.log('DrugEtc 추가 완료');

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === 'The drugId already exists.') {
      statusCode = StatusCodes.CONFLICT;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const modifyDrug = async (req, res, next) => {
  const {
    itemName,
    efcyQesitm,
    useMethodQesitm,
    seQesitm,
    depositMethodQesitm,
    itemImage,
    printFront,
    printBack,
    drugShape,
    colorClass1,
    colorClass2,
    lineFront,
    lineBack,
    ingrEngName,
    ingrKorName,
    dosageForm,
    strength
  } = req.body;
  const itemSeq = Number(req.params.drugId);

  try {
    let sql = 'select * from DrugInfo where itemSeq = ?';
    let results = await query(sql, itemSeq);
    if (results.length === 0) {
      throw new Error('No item to update.');
    }

    sql = `update DrugInfo 
          set itemName = ?, efcyQesitm = ?, useMethodQesitm = ?, seQesitm = ?, depositMethodQesitm = ?, itemImage = ? 
          where itemSeq = ?`;
    let values = [itemName, efcyQesitm, useMethodQesitm, seQesitm, depositMethodQesitm, itemImage, itemSeq];
    await query(sql, values);
    console.log('DrugInfo 수정 완료');

    sql = `update DrugImageInfo 
          set printFront = ?, printBack = ?, drugShape = ?, colorClass1 = ?, colorClass2 = ?, lineFront = ?, lineBack = ? 
          where itemSeq = ?`;
    values = [printFront, printBack, drugShape, colorClass1, colorClass2, lineFront, lineBack, itemSeq];
    await query(sql, values);
    console.log('DrugImageInfo 수정 완료');

    sql = 'select * from DrugEtc where itemSeq = ?';
    results = await query(sql, itemSeq);

    if (results.length === 0) {
      sql = `insert into DrugEtc (itemSeq, ingrEngName, ingrKorName, dosageForm, strength) 
            values (?, ?, ?, ?, ?)`;
      values = [itemSeq, ingrEngName, ingrKorName, dosageForm, strength];
    } else {
      sql = `update DrugEtc 
            set ingrEngName = ?, ingrKorName = ?, dosageForm = ?, strength = ? 
            where itemSeq = ?`;
      values = [ingrEngName, ingrKorName, dosageForm, strength, itemSeq];
    }
    await query(sql, values);
    console.log('DrugEtc 수정 완료');

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === 'No item to update.') {
      statusCode = StatusCodes.NOT_FOUND;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const removeDrug = async (req, res, next) => {
  const itemSeq = Number(req.params.drugId);

  try {
    let sql = 'select * from DrugInfo where itemSeq = ?';
    let results = await query(sql, itemSeq);
    if (results.length === 0) {
      throw new Error('No item to remove.');
    }

    sql = 'delete from DrugInfo where itemSeq = ?';
    results = await query(sql, itemSeq);
    console.log('DrugInfo 삭제 완료');

    sql = 'delete from DrugImageInfo where itemSeq = ?';
    results = await query(sql, itemSeq);
    console.log('DrugImageInfo 삭제 완료');

    sql = 'delete from DrugEtc where itemSeq = ?';
    results = await query(sql, itemSeq);
    console.log('DrugInfo 삭제 완료');

    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    if (error.message === 'No item to remove.') {
      statusCode = StatusCodes.NOT_FOUND;
    }

    return next(new CustomError(error.message, statusCode));
  }
};

const updateDrugData = async (req, res, next) => {
  try {
    console.log('drugInfo 데이터 저장 시작');
    const drugInfo = await getAllDrugInfo(process.env.DRUG_INFO, process.env.DRUG_INFO_URL, drugInfoFilter);
    console.log('drugInfo 데이터 저장 완료');
    console.log('drugImageInfo 데이터 저장 시작');
    const drugImageInfo = await getAllDrugInfo(process.env.DRUG_IMAGE_INFO, process.env.DRUG_IMAGE_INFO_URL, drugImageInfoFilter);
    console.log('drugImageInfo 데이터 저장 완료');
    console.log('drugEtc 데이터 저장 시작');
    const drugEtc = await getAllDrugInfo(process.env.DRUG_ETC, process.env.DRUG_ETC_URL, drugEtcFilter);
    console.log('drugEtc 데이터 저장 완료');

    let sql = 'select * from DrugInfo;';
    let dbData = await query(sql);

    console.log('DrugInfo에 추가될 데이터 추출 시작');
    const filteredDrugInfo = await getDifferenceByKeyAndToArray(drugInfo, dbData);
    console.log('DrugInfo에 추가될 데이터 추출 완료');

    sql = 'select * from DrugImageInfo;';
    dbData = await query(sql);

    console.log('filteredDrugImageInfo에 추가될 데이터 추출 시작');
    const filteredDrugImageInfo = await getDifferenceByKeyAndToArray(drugImageInfo, dbData);
    console.log('filteredDrugImageInfo에 추가될 데이터 추출 완료');

    sql = 'select * from DrugEtc;';
    dbData = await query(sql);

    console.log('filteredDrugEtc에 추가될 데이터 추출 시작');
    const filteredDrugEtc = await getDifferenceByKeyAndToArray(drugEtc, dbData);
    console.log('filteredDrugEtc에 추가될 데이터 추출 완료');

    let drugInfoResults, drugImageInfoResults;
    if (filteredDrugInfo.length !== 0 && filteredDrugImageInfo.length !== 0) {
      console.log('DrugInfo 중복 데이터 제거 시작');
      const filteredDrugInfo2 = await removeDuplicateObjects(filteredDrugInfo);
      console.log('DrugInfo 중복 데이터 제거 완료');

      console.log('DrugImageInfo 중복 데이터 제거 시작');
      const filteredDrugImageInfo2 = await removeDuplicateObjects(filteredDrugImageInfo);
      console.log('DrugImageInfo 중복 데이터 제거 완료');

      console.log('DrugInfo, DrugImageInfo 공통 데이터 추출 시작');
      const [
        jsonDrugInfo,
        jsonDrugImageInfo,
        arrayDrugInfo,
        arrayDrugImageInfo,
      ] = await getCommonByKey(filteredDrugInfo2, filteredDrugImageInfo2);
      console.log('DrugInfo, DrugImageInfo 공통 데이터 추출 완료');

      if (jsonDrugInfo.length !== 0 && jsonDrugImageInfo.length !== 0) {
        console.log('DrugInfo 데이터 추가 시작');
        sql = 'insert into DrugInfo (itemSeq, itemName, efcyQesitm, useMethodQesitm, seQesitm, depositMethodQesitm, itemImage) values ?;';
        drugInfoResults = await query(sql, [arrayDrugInfo]);
        console.log('DrugInfo 데이터 추가 완료');

        console.log('DrugImageInfo 데이터 추가 시작');
        sql = 'insert into DrugImageInfo (itemSeq, printFront, printBack, drugShape, colorClass1, colorClass2, lineFront, lineBack) values ?;';
        drugImageInfoResults = await query(sql, [arrayDrugImageInfo]);
        console.log('DrugImageInfo 데이터 추가 완료');
      }
    }

    let drugEtcResults;
    if (filteredDrugEtc.length !== 0) {
      console.log('DrugEtc 중복 데이터 제거 시작');
      const filteredDrugEtc2 = await removeDuplicateObjects(filteredDrugEtc);
      console.log('DrugEtc 중복 데이터 제거 완료');

      const filteredDrugEtc3 = filteredDrugEtc2.filter(value => value.itemSeq !== 0);

      if(filteredDrugEtc3.length !== 0){
        console.log('DrugEtc 2차원 배열로 변환 시작');
        const arrayDrugEtc = filteredDrugEtc3.map(obj => Object.values(obj));
        console.log('DrugEtc 2차원 배열로 변환 완료');
  
        console.log('DrugEtc 데이터 추가 시작');
        sql = 'insert into DrugEtc (itemSeq, ingrEngName, ingrKorName, dosageForm, strength) values ?;';
        drugEtcResults = await query(sql, [arrayDrugEtc]);
        console.log('DrugEtc 데이터 추가 완료');
      }
    }

    console.log('업데이트 완료');
    return res.status(StatusCodes.OK).end();
  } catch (error) {
    let statusCode;

    return next(new CustomError(error.message, statusCode));
  }
};

const getAllDrugInfo = async (serviceKey, baseUrl, filterFunc) => {
  let pageNo = 1;
  const numOfRows = 100;
  let allData = [];

  const fetchPage = async () => {
    const queryParams = `?serviceKey=${encodeURIComponent(serviceKey)}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`;

    const response = await axios.get(baseUrl + queryParams);

    const result = await response.data;
    if(typeof result === 'string'){
      const match = result.match(/<returnAuthMsg>(.*?)<\/returnAuthMsg>/);
      throw new Error(match[1]);
    }
    const itemsBody = await result.body;
    const items = await itemsBody.items;

    if (!items) {
      throw new Error('Failed to retrieve data from the API.');
    }

    const filteredItems = await filterFunc(items);

    allData.push(...filteredItems);

    if (items.length < numOfRows) {
      return allData;
    } else {
      pageNo++;
      await fetchPage();
    }
  };

  await fetchPage();
  return allData;
};

module.exports = {
  getDrugDetail,
  addDrug,
  modifyDrug,
  removeDrug,
  updateDrugData,
  getAllDrugInfo
};
