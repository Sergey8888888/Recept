const React = require('react');
const Layout = require('./Layout');

function MainPage() {
  return (
    <Layout>
      <div className="main">
        <h1>Это просто главная страница!</h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
