const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts-ctr')

router.post('/contacts', contactsController.createContact)
router.get('/contacts', contactsController.retrieveAllContacts)
router.get('/contacts/:id', contactsController.retrieveOneContact)
router.put('/contacts/:id', contactsController.updateContact)
router.delete('/contacts/:id', contactsController.deleteContact)

module.exports = router