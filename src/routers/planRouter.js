const router = require('express').Router()
const planController = require('../controllers/planController')


router.get('/simular', planController.simular )
router.post('/create', planController.create )
router.put('/update', planController.update )
router.delete('/delete', planController.delete )
router.put('/aprouved', planController.aprouved )
router.put('/signed', planController.signed )


module.exports = router