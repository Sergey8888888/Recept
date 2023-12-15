const React = require('react');
const Layout = require('./Layout');

function OneRecipe({ recipe }) {
  return (
    <Layout>
      <div className="oneRecipe">
        <img src={recipe.image} />
        <h2>{recipe.name}</h2>

        <h3>Время приготовления:{recipe.timing} МИНУТ </h3>

        <p>{recipe.recipes}</p>
        <p>{recipe.description}</p>
      </div>
    </Layout>
  );
}

module.exports = OneRecipe;
