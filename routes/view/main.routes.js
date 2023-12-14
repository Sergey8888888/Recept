const router = require('express').Router();

const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  const html = await res.renderComponent(MainPage);
  res.send(html);
});

router.get('/main', async (req, res) => {
  const { user } = res.locals;
  const html = await res.renderComponent(MainPage, { user });
  res.send(html);
});

module.exports = router;
