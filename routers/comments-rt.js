const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments-ctr')

router.post('/comments', commentsController.createComment)
router.get('/comments', commentsController.retrieveAllComments)
router.get('/comments/:id', commentsController.retrieveOneComment)
router.put('/comments/:id', commentsController.updateComment)
router.delete('/comments/:id', commentsController.deleteComment)

module.exports = router