let comments = require('../data/comments')
let counter = 5

const createComment = (req, res) => {
  if (comments) {
    comments.push({_id: counter++, ...req.body})
    res.json(comments[comments.length - 1])
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const retrieveAllComments = (req, res) => {
  if (comments) {
    res.json(comments)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const retrieveOneComment = (req, res) => {
  if (req.params.id) {
    res.json(comments.filter( comments => comments._id === parseInt(req.params.id))) 
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const updateComment = (req, res) => {
  let foundComment = (comments.filter( comments => comments._id === parseInt(req.params.id)))
  let comment = foundComment[0]
  if (comment) {
    comment.body = req.body.body ? req.body.body : comment.body
    res.json(comment)
  } else {
    res.status(400).json({ message: `Error has occured, try looking at pictures of puppies and then try again later`})
  }
}

const deleteComment = (req, res) => {
  let foundComment = (comments.filter( comments => comments._id === parseInt(req.params.id)))
    let comment = foundComment[0]
    if (comment) {
      comment.isActive = false
      res.send("He has been silenced")
    } else {
      res.status(400).json({ message: `No member with the id of ${req.params.userId}`})
    }
}

module.exports = {
  createComment,
  retrieveAllComments,
  retrieveOneComment,
  updateComment,
  deleteComment
}