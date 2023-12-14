const React = require('react');
const Layout = require('./Layout');
const RecipeItem = require('./RecipeItem');


function MainPage({recipes, user}) {
  return (
    <Layout>
      <div className="main">
        {/* <h1>Это просто главная страница!</h1> */}
        {recipes && recipes.map((recipe) => <RecipeItem recipe={recipe} user={user}/>)}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
