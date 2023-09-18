const { Router } = require("express");
const { newsController } = require("../controllers/newscontroller.controller");

const router = Router();

router.post('/news', newsController.addNews);
router.delete('/news/:id', newsController.deleteNews);
router.patch('/news/:id', newsController.changeNews);
router.get('/news/:id', newsController.getNewsId);
router.get('/news', newsController.getAllNews);
router.get('/news/category/:id', newsController.getAllNewsByCategory);


module.exports = router;