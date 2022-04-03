const router = require('express').Router()
const clientController = require('../controllers/clientController')

router.get('/simularplano', clientController.clientSimularPlano)
router.post('/create', clientController.clientCreate)


module.exports = router