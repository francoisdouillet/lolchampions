const express = require("express");

const router = express.Router();

const championCtrl = require('../controllers/champion')

router.post("/", championCtrl.displayChampion);
router.get("/:id", championCtrl.getChampions)
router.get("/sheet/:id", championCtrl.getOneChampion)

module.exports = router;
