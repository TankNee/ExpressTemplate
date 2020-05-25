const express = require("express");
const router = express.Router();
const utils = require("../utils");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json(utils.JsonResponse.success()).end();
});

module.exports = router;
