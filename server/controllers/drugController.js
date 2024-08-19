const { StatusCodes } = require('http-status-codes');
const axios = require('axios');
const xml2js = require('xml2js');
const query = require('../config/db');

const parser = new xml2js.Parser({ explicitArray: false });

const getDrugDetail = async (req, res) => { };

const addDrug = async (req, res) => { };

const modifyDrug = async (req, res) => { };

const removeDrug = async (req, res) => { };

const updateDrugData = async (req, res, next) => {
  // const drugInfo = await getAllDrugInfo(process.env.DRUG_INFO, process.env.DRUG_INFO_URL);
  // const drugInfo = await getAllDrugInfo(process.env.DRUG_IMAGE_INFO, process.env.DRUG_IMAGE_INFO_URL);
  // const drugInfo = await getAllDrugInfo(process.env.DRUG_INFO, process.env.DRUG_INFO_URL);
  // console.log(drugInfo);

  // const sql = `select * from Users;`
  // const results = await query(sql);

  res.status(StatusCodes.OK).end();
  return;
};

const getAllDrugInfo = async (serviceKey, baseUrl) => {
  let pageNo = 1;
  const numOfRows = 100;
  let allData = [];

  const fetchPage = async () => {
    const queryParams = `?serviceKey=${encodeURIComponent(serviceKey)}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=xml`;

      const response = await axios.get(baseUrl + queryParams);
      const result = await parser.parseStringPromise(response.data);

      const items = result.response.body.items.item;

      if (!items) {
        throw new Error('Failed to retrieve data from the API.');
      }

      allData.push(...items);

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
};
