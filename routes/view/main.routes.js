const router = require('express').Router();

const MainPage = require('../../components/MainPage');
const OneRecipe = require('../../components/OneRecipe');

const { Card } = require('../../db/models');

// router.get('/', async (req, res) => {
//   try {
//     const { user } = res.locals;
//     const recipes = await Card.findAll();
//     const html = await res.renderComponent(MainPage, {
//       title: 'Main Page',
//       recipes,
//       user,
//     });
//     res.send(html);
//   } catch ({ message }) {
//     console.log(message);
//   }
// });
router.get('/', async (req, res) => {
  try {
    const { sort } = req.query;
    const { user } = res.locals;
    let recipes;

    if (sort === 'ASC') {
      recipes = await Card.findAll({
        order: [['timing', 'ASC']],
      });
    } else if (sort === 'DESC') {
      recipes = await Card.findAll({
        order: [['timing', 'DESC']],
      });
    } else {
      recipes = await Card.findAll();
    }

    const html = await res.renderComponent(MainPage, {
      title: 'Main Page',
      recipes,
      user,
      selectedSort: sort,
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/main/:id', async (req, res) => {
  const { id } = req.params;
  const recipe = await Card.findOne({ where: { id } });
  res.send(res.renderComponent(OneRecipe, { recipe }));
});

module.exports = router;
