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
const { addDrugValidator } = require('../validators/authValidator');
const validateHandler = require('../middlewares/validateHandler')

router.post("/", authenticateJWT, authenticateRole, addDrugValidator, validateHandler, addDrug);
router.get("/update", authenticateJWT, authenticateRole, updateDrugData);
router.get("/:drugId", getDrugDetail);
router.put("/:drugId",  authenticateJWT, authenticateRole, modifyDrug);
router.delete("/:drugId", authenticateJWT, authenticateRole, removeDrug);

module.exports = router;
