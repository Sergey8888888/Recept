const React = require('react');
const Layout = require('../Layout');

function ProfilePage({ user }) {
  return (
    <Layout user={user}>
      <div className="profile-page">
        {user && }
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
