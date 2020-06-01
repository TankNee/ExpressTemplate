const express = require("express");
const router = express.Router();
const utils = require("../utils");

router.get("/", function (req, res, next) {
	res.json(utils.JsonResponse.success()).end();
});

module.exports = router;
