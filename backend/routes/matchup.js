const express = require("express");

const router = express.Router();

const matchupCtrl = require('../controllers/matchup')

router.post("/matchup", matchupCtrl.displayMatchup);

module.exports = router;
