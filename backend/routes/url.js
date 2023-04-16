const express = require('express');

const { encode, decode } = require('../controllers/urlController')

const router = express.Router();

router.post('/encode', encode)

router.get('/decode/:urlId', decode)

module.exports = router;