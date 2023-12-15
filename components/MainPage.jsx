const React = require('react');
const Layout = require('./Layout');
const RecipeItem = require('./RecipeItem');

function MainPage({ recipes, user }) {
  return (
    <Layout user={user}>
      <div className="main">
        <form>
          <select name="sort">
            <option value="">-- Выберите сортировку --</option>
            <option value="ASC">По возрастанию</option>
            <option value="DESC">По убыванию</option>
          </select>
          <button type="submit">Отправить</button>
        </form>
        <div className="recipeItem">
          {recipes &&
            recipes.map((recipe) => <RecipeItem recipe={recipe} user={user} />)}
          <h1>Здесь будут все рецепты!</h1>
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
