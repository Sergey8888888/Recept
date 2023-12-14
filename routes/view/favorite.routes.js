const router = require('express').Router();
const FavoritePage = require('../../components/pages/FavoritePage');

router.use('/', async (req, res) => {
  const html = res.renderComponent(FavoritePage, {});
  res.send(html);
});

module.exports = router;
