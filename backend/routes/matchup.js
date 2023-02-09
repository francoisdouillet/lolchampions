const express = require("express");

const router = express.Router();

const matchupCtrl = require('../controllers/matchup')

router.post("/", matchupCtrl.displayMatchup);
router.get("/:id", matchupCtrl.getMatchups)

module.exports = router;
