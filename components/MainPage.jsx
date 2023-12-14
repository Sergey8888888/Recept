const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      <div className="main">
        <h1>Здесь будут все рецепты!</h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
