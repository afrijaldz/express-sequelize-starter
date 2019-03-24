const express = require('express');

const router = express.Router();

const RoleController = require('../controllers/RoleController');
const ResponseMiddleware = require('../middlewares/ResponseMiddleware');

router.get('/', RoleController.all, ResponseMiddleware);
router.get('/:id', RoleController.show, ResponseMiddleware);
router.post('/', RoleController.store, ResponseMiddleware);
router.put('/:id', RoleController.update, ResponseMiddleware);
router.delete('/:id', RoleController.destroy, ResponseMiddleware);

module.exports = router;
