const React = require('react');
const Header = require('./Header');

module.exports = function Layout({ title, user, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
};
