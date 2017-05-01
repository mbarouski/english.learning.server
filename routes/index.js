const express = require('express');
const router = express.Router();
const authenticate = require('../services/auth').authenticate;

router.use(authenticate());

router.use('/users', require('./users'));

module.exports = router;