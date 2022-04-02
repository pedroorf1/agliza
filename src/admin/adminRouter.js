const router = require('express').Router()
const adminController = require('./adminController')

router.post("/create", adminController.create)
router.delete("/delete", adminController.delete)
router.put("/update", adminController.update)
router.put("/changepass", adminController.changePassword)



module.exports = router