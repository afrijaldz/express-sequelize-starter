const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const ResponseMiddleware = require('../middlewares/ResponseMiddleware')

router.post('/', AuthController.login, ResponseMiddleware)

module.exports = router
