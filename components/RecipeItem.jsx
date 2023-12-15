const React = require('react');

function RecipeItem({ recipe, user }) {
  return (
    <div className="recipeItem" data-id={recipe.id}>
      {/* {user.id === recipe.userId && (
                
            )}  */}

      <img src={recipe.image} />
      <a href={`/recept/${recipe.id}`}>{recipe.name}</a>
      <button className="btnFav">Сердечко</button>
    </div>
  );
}

module.exports = RecipeItem;
