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
    console.log(fav);
    const response = await fetch(
      'https://657b17dd394ca9e4af13ab8f.mockapi.io/view/recept',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const recipes = await response.json();

    const html = res.renderComponent(FavoritePage, {
      user,
      recipes,
    });

    res.send(html);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
