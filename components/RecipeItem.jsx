const React = require('react');

function RecipeItem({ recipe, user }) {
  return (
    <div className="recipeItem">
      {/* {user.id === recipe.userId && (
                
            )}  */}

      <img src={recipe.image} style={{ width: '200px', height: '200px' }} />
      <a href={`/main/${recipe.id}`}>{recipe.name}</a>
      <button className="btnFav">Сердечко</button>
    </div>
  );
}

module.exports = RecipeItem;
