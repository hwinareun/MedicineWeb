const express = require("express");
const router = express.Router();
const {
  getDrugDetail,
  addDrug,
  modifyDrug,
  removeDrug,
  updateDrugData
} = require("../controllers/drugController");
const { authenticateJWT, authenticateRole } = require('../middlewares/auth');

router.post("/", addDrug);
router.get("/update",authenticateJWT, authenticateRole, updateDrugData);
router.get("/:drugId", getDrugDetail);
router.put("/:drugId", modifyDrug);
router.delete("/:drugId", removeDrug);

module.exports = router;
