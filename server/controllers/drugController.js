const { StatusCodes } = require('http-status-codes');
const axios = require('axios');
const query = require('../config/db');
const {
  drugInfoFilter,
  drugImageInfoFilter,
  drugEtcFilter
} = require('../utils/drugDataFilter');
const getDifferenceByKeyAndToArray = require('../utils/getDifferenceByKey');
const fs = require('fs');
const getCommonByKey = require('../utils/getCommonByKey');

const getDrugDetail = async (req, res) => { };

const addDrug = async (req, res) => { };

const modifyDrug = async (req, res) => { };

const removeDrug = async (req, res) => { };

const updateDrugData = async (req, res, next) => {
  try {
    const drugInfo = await getAllDrugInfo(process.env.DRUG_INFO, process.env.DRUG_INFO_URL, drugInfoFilter);
  const drugImageInfo = await getAllDrugInfo(process.env.DRUG_IMAGE_INFO, process.env.DRUG_IMAGE_INFO_URL, drugImageInfoFilter);
  // const drugEtc = await getAllDrugInfo(process.env.DRUG_ETC, process.env.DRUG_ETC_URL, drugEtcFilter);

  let sql = 'select * from DrugInfo;';
  let dbData = await query(sql);

  console.log('filteredDrugInfo 시작');
  const filteredDrugInfo = await getDifferenceByKeyAndToArray(drugInfo, dbData);
  console.log('filteredDrugInfo 완료');


  sql = 'select * from DrugImageInfo;';
  dbData = await query(sql);

  console.log('filteredDrugImageInfo 시작');
  const filteredDrugImageInfo = await getDifferenceByKeyAndToArray(drugImageInfo, dbData);
  console.log('filteredDrugImageInfo 완료');

  // sql = 'select * from DrugEtc;';
  // dbData = await query(sql);

  // const filteredDrugEtc = await getDifferenceByKeyAndToArray(drugEtc, drugEtcFilter);

  if (filteredDrugInfo.length === 0 || filteredDrugImageInfo.length === 0) {
    return res.status(StatusCodes.OK).json({ message: 'Nothing to update data.' });
  }

  console.log('공통 데이터 추출 시작');
  const [
    jsonDrugInfo,
    jsonDrugImageInfo,
    // jsondrugEtc,
    arrayDrugInfo,
    arrayDrugImageInfo,
    // arrayDrugEtc
  ] = await getCommonByKey(filteredDrugInfo, filteredDrugImageInfo);
  console.log('공통 데이터 추출 완료');

  if (jsonDrugInfo.length === 0 || jsonDrugImageInfo.length === 0) {
    return res.status(StatusCodes.OK).json({ message: 'Nothing to update data.' });
  }

  sql = 'insert into DrugInfo (itemSeq, itemName, efcyQesitm, useMethodQesitm, seQesitm, depositMethodQesitm, itemImage) values ?;';
  const drugInfoResults = await query(sql, [arrayDrugInfo]);

  sql = 'insert into DrugImageInfo (itemSeq, printFront, printBack, colorClass1, colorClass2, lineFront, lineBack) values ?;';
  const drugImageInfoResults = await query(sql, [arrayDrugImageInfo]);

  // sql = 'insert into DrugEtc (itemSeq, ingrEngName, ingrKorName, dosageForm) values ?;';
  // const drugEtcResults = await query(sql, [arrayDrugEtc]);

  return res.status(StatusCodes.OK).json({ results: [drugInfoResults, drugImageInfoResults] });
  // return res.status(200).end();
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
    // const result = await parser.parseStringPromise(response.data);
    const result = await response.data;

    const items = await result.body.items;

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
