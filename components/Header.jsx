const React = require('react');

function Header() {
  return (
    <div className="header">
      <a href="/main">Главная страница</a>
      <a href="/auth/registration">Регистрация</a>
      <a href="/auth/login">Вход</a>
    </div>
  );
}

module.exports = Header;
