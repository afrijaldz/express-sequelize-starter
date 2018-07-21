const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const ResponseMiddleware = require('../middlewares/ResponseMiddleware')

router.get('/', UserController.all, ResponseMiddleware)
router.get('/:id', UserController.show, ResponseMiddleware)
router.post('/', UserController.store, ResponseMiddleware)
router.put('/:id', UserController.update, ResponseMiddleware)
router.delete('/:id', UserController.destroy, ResponseMiddleware)

module.exports = router
