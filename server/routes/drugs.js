const express = require("express");
const router = express.Router();
const {
  getDrugDetail,
  addDrug,
  modifyDrug,
  removeDrug,
  updateDrugData
} = require("../controllers/drugController");
const { authenticateJWT, authorizationRole } = require('../middlewares/auth');
const { addDrugValidator } = require('../validators/authValidator');
const validateHandler = require('../middlewares/validateHandler')

router.post("/", authenticateJWT, authorizationRole, addDrugValidator, validateHandler, addDrug);
router.get("/update", authenticateJWT, authorizationRole, updateDrugData);
router.get("/:drugId", getDrugDetail);
router.put("/:drugId",  authenticateJWT, authorizationRole, modifyDrug);
router.delete("/:drugId", authenticateJWT, authorizationRole, removeDrug);

module.exports = router;
