const React = require('react');

function RecipeItem({recipe, user}) {
    return (
        <div className='recipeItem'>
            {/* {user.id === recipe.userId && (
                
            )}  */}

            <button className='btnFav'>Сердечко</button>
            <img src={recipe.image} alt="" />
            <a href={`/${recipe.id}`}>{recipe.name}</a>
        </div>
    )
}

module.exports = RecipeItem