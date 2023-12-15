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

router.get('/recept', async (req, res) => {
  try {
    const { user } = res.locals;

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
    // console.log(recipes);

    // console.log(recipes);

    const html = res.renderComponent(MainPage, {
      title: 'Main Page',
      recipes,
      user,
    });

    res.send(html);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/recept/:id', async (req, res) => {
  const { id } = req.params;
  // const recipe = await Card.findOne({ where: { id } });
  const item = await fetch(
    `https://657b17dd394ca9e4af13ab8f.mockapi.io/view/recept/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  console.log(recipe);

  if (!item.ok) {
    throw new Error(`Failed to fetch data. Status: ${item.status}`);
  }
  const recipe = await item.json();
  res.send(res.renderComponent(OneRecipe, { recipe }));
});

module.exports = router;
