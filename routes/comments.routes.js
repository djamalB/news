const { Router } = require("express")
const { commentsController } = require('../controllers/comments.controller')

const router = Router()

router.post('/news/comments', commentsController.addComment);
router.delete('/news/comments/:id', commentsController.deleteComment);
router.get('/news/comments/:id', commentsController.getAllCommentsOfNew);



module.exports = router;