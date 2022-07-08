var express = require('express');
const { createConnection } = require('../api/database');
var router = express.Router();


/* GET home page. */
router.get('/', createConnection);

module.exports = router;
