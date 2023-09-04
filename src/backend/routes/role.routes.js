const Router = require('express')
const router = new Router()
const roleController = require('../controllers/role.controller')

router.post('/role', roleController.createRole)
router.get('/role', roleController.getRoles)
router.get('/role/:id', roleController.getOneRole)
router.put('/role', roleController.updateRole)
router.delete('/role/:id', roleController.deleteRole)

module.exports = router