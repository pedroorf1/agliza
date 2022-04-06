const router = require('express').Router()
const userController = require('./userController')

router.post('/', userController.login)
router.post('/create', userController.create)


module.exports = router