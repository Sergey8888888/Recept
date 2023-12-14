const React = require('react');
const Header = require('./Header');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* <script defer src="/js/addCategories.js" />
        <script defer src="/js/deleteCategories.js" />
        <script defer src="/js/updateCategories.js" /> */}
      </head>
      <Header />
      <body>{children}</body>
    </html>
  );
};
