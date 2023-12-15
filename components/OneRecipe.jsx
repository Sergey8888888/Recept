const React = require('react');
const Layout = require('./Layout');

function OneRecipe({ recipe, user }) {
  return (
    <Layout user={user}>
      <div className="oneRecipe">
        <img src={recipe.image} style={{ width: '200px', height: '200px' }} />
        <h2>{recipe.name}</h2>
        <h3>Время приготовления:{recipe.timing} МИНУТ </h3>
        <p>{recipe.resipes}</p>
        <p>{recipe.description}</p>
      </div>
    </Layout>
  );
}

module.exports = OneRecipe;
