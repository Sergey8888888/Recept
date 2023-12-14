const React = require('react')
const Layout = require('./Layout')


function OneRecipe({recipe}) {
    return (
        <Layout>
            <div className='oneRecipe'>
                <img src={recipe.image} alt="" />
                <h2>{recipe.name}</h2>
                <p>{recipe.resipes}</p>
                <p>{recipe.description}</p>
            </div>
        </Layout>
    )
}

module.exports = OneRecipe