const router = require('express').Router();

const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  const html = await res.renderComponent(MainPage);
  res.send(html);
});

module.exports = router;
