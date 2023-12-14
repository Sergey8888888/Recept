const React = require('react');
const Layout = require('../Layout');

function FavoritePage({ user }) {
  return (
    <Layout user={user}>
      <div className="fav-card"></div>
      <h1>Это страница избранного</h1>
    </Layout>
  );
}

module.exports = FavoritePage;
