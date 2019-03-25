const express = require('express');

const router = express.Router();

const AuthController = require('../controllers/AuthController');
const ResponseMiddleware = require('../middlewares/ResponseMiddleware');

// router.post('/login', AuthController.login, ResponseMiddleware);
router.post('/register', AuthController.register, ResponseMiddleware);

module.exports = router;
