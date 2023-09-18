const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json());
app.use(require('./routes/categories.roure'))
app.use(require('./routes/news.route'))
app.use(require('./routes/comments.routes'))

mongoose
  .connect(
    "mongodb+srv://djamal123:djamal123@atlascluster.tcggogd.mongodb.net/newsBackend",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

  app.listen(4001, () => {
    console.log(`Сервер успешно запущен на http://localhost:4001`);
  })