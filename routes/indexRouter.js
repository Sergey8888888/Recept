const router = require('express').Router();

// роутеры на отрисовку
const mainRouter = require('./view/main.routes');

// роутеры на действия

// view роутеры

// api роутеры
router.use('/', mainRouter);

module.exports = router;
