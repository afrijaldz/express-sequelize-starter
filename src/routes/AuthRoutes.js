const express = require('express');

const router = express.Router();

const AuthController = require('../controllers/AuthController');
const { response } = require('../middlewares/ResponseMiddleware');

// router.post('/login', AuthController.login, ResponseMiddleware);
router.post('/register', AuthController.register, response);

module.exports = router;
