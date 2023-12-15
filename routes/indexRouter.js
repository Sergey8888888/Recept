const router = require('express').Router();

// роутеры на отрисовку
const mainRouter = require('./view/main.routes');
const authRouter = require('./view/auth.routes');
const favoriteRouter = require('./view/favorite.routes');
// роутеры на действия
const apiAuthRouter = require('./api/authRoutes');
const apiFavRouter = require('./api/favoriteRoutes');
// view роутеры
router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/favorite', favoriteRouter);

// api роутеры
router.use('/api/auth', apiAuthRouter);
router.use('/api/recipe', apiFavRouter);

module.exports = router;
