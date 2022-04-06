const router = require('express').Router()
const proposalController = require('../controllers/proposalController')

router.post('/proposta', proposalController.propostalCreate)


module.exports = router