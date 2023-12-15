const React = require('react');
const Layout = require('../Layout');
const RecipeItem = require('../RecipeItem');

function FavoritePage({ user, recipes }) {
  return (
    <Layout user={user}>
      <div className="fav-card"></div>
      <h1>Это страница избранного</h1>

      {recipes && recipes.map((recipe) => <RecipeItem recipe={recipe} />)}
    </Layout>
  );
}

module.exports = FavoritePage;
