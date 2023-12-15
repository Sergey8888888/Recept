const router = require('express').Router();
const FavoritePage = require('../../components/pages/FavoritePage');
const { Favorite } = require('../../db/models');

// router.use('/', async (req, res) => {
//   const html = res.renderComponent(FavoritePage, {});
//   res.send(html);
// });

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const fav = await Favorite.findAll({ where: { userId: user.id } });

    const html = res.renderComponent(FavoritePage, {
      user,
    });

    res.send(html);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
