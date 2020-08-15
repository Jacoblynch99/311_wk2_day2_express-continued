let contacts = require('../data/contacts')
let counter = contacts.length + 1

const createContact = (req, res) => {
  if (contacts) {
    contacts.push({_id: counter++, ...req.body})
    res.json(contacts[contacts.length -1])
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const retrieveAllContacts = (req, res) => {
  if (contacts) {
    res.json(contacts)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const retrieveOneContact = (req, res) => {
  if (contacts) {
    res.json(contacts.filter( contacts => contacts._id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const updateContact = (req, res) => {
  let foundContact = (contacts.filter( contacts => contacts._id === parseInt(req.params.id)))
  let contact = foundContact[0]
  if (contact) {
    contact.name = req.body.name ? req.body.name : contact.name
    contact.occupation = req.body.occupation ? req.body.occupation : contact.occupation
    contact.avatar = req.body.avatar ? req.body.avatar : contact.avatar
    res.json(contact)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const deleteContact = (req, res) => {
  let foundContact = (contacts.filter( contacts => contacts._id === parseInt(req.params.id)))
  let contact = foundContact[0]
  if (contact) {
    contact.isActive = false
    res.send("Houston, we have contact")
  } else {
    res.status(400).json({ message: `No member with the id of ${req.params.userId}`})
  }
}

module.exports = {
  createContact,
  retrieveAllContacts,
  retrieveOneContact,
  updateContact,
  deleteContact
}