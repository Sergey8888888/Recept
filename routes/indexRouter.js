const router = require('express').Router();

// роутеры на отрисовку
const mainRouter = require('./view/main.routes');
const authRouter = require('./view/auth.routes');
// роутеры на действия
const apiAuthRouter = require('./api/authRoutes');
// view роутеры
router.use('/', mainRouter);
router.use('/auth', authRouter);

// api роутеры
router.use('/api/auth', apiAuthRouter);

module.exports = router;
