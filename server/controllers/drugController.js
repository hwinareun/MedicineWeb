const { StatusCodes } = require('http-status-codes');
const axios = require('axios');
const xml2js = require('xml2js');
const query = require('../config/db');
const {
  drugInfoFilter,
  drugImageInfoFilter,
  drugEtcFilter
} = require('../utils/drugDataFilter');
const getDifferenceByKeyAndToArray = require('../utils/getDifferenceByKey');

const parser = new xml2js.Parser({ explicitArray: false });

const getDrugDetail = async (req, res) => { };

const addDrug = async (req, res) => { };

const modifyDrug = async (req, res) => { };

const removeDrug = async (req, res) => { };

const checkUpdateDrugData = async (req, res, next) => {

};

const updateDrugData = async (req, res, next) => {
  const drugInfo = await getAllDrugInfo(process.env.DRUG_INFO, process.env.DRUG_INFO_URL, drugInfoFilter);
  // const drugInfo = await getAllDrugInfo(process.env.DRUG_IMAGE_INFO, process.env.DRUG_IMAGE_INFO_URL, drugImageInfoFilter);
  // const drugInfo = await getAllDrugInfo(process.env.DRUG_ETC, process.env.DRUG_ETC_URL, drugEtcFilter);
  // console.log(drugInfo[0]);

  // const sql = `select * from DrugInfo;`;
  let sql = 'select * from DrugInfo;';
  const results = await query(sql);

  const [resultDiff, resultToArray] = await getDifferenceByKeyAndToArray(drugInfo, results);

  // insert resultToArray

  return res.status(StatusCodes.OK).json({
    message: `${resultDiff.length} values are updated.`,
    values: resultDiff
  });
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

      const items = result.body.items;

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
  getAllDrugInfo,
  checkUpdateDrugData
};
