const router = require('express').Router();

const { Favorite } = require('../../db/models');
const { Card } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { id } = req.body;
    console.log(id);
    await Card.create({});
    const fav = await Favorite.create({ userId: userId, cardId: id });
    console.log(fav, '111111');
    // if (fav) {
    //   res.json({ message: 'success', fav });
    // }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
