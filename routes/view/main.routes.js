const router = require('express').Router();

const MainPage = require('../../components/MainPage');
const OneRecipe = require('../../components/OneRecipe');

const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const recipes = await Card.findAll();
    const html = await res.renderComponent(MainPage, {
      title: 'Main Page',
      recipes,
      user,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await Card.findOne({ where: { id } });
  res.send(res.renderComponent(OneRecipe, { recipe }));
});

router.get('/main', async (req, res) => {
  const { user } = res.locals;
  const html = await res.renderComponent(MainPage, { user });
  res.send(html);
});

module.exports = router;
