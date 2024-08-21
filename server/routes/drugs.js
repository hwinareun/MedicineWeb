const express = require("express");
const router = express.Router();
const {
  getDrugDetail,
  addDrug,
  modifyDrug,
  removeDrug,
  updateDrugData
} = require("../controllers/drugController");

router.get("/update", updateDrugData);
router.get("/:drugId", getDrugDetail);
router.post("/", addDrug);
router.put("/:drugId", modifyDrug);
router.delete("/:drugId", removeDrug);


module.exports = router;
