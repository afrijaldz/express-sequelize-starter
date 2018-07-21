const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const ResponseMiddleware = require('../middlewares/ResponseMiddleware');

router.get('/', UserController.all, ResponseMiddleware);

module.exports = router;
