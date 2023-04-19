const express = require('express');

const { encode, decode, getStatistic } = require('../controllers/urlController')

const router = express.Router();

router.post('/encode', encode)

router.get('/decode', decode)

router.get('/statistic/:url_path', getStatistic)

module.exports = router;