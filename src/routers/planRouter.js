const router = require('express').Router()
const planController = require('../controllers/planController')


router.get('/simular', planController.simular )
router.delete('/delete', planController.delete )
router.put('/aprouved', planController.aprouved )
router.put('/signed', planController.signed )


router.get('/', planController.list )
router.get('/information/:id?', planController.information )
router.post('/create', planController.create )


module.exports = router