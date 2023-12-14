const React = require('react');

function Header({ user }) {
  return (
    <div className="header">
      <a href="/">Главная страница</a>
      <div>
        {!user && (
          <div className="auth">
            <a href="/auth/registration">Регистрация</a>
            <a href="/auth/login">Вход</a>
          </div>
        )}
        <div>
          {user && (
            <div className="auth-2">
              <a>👀Добро пожаловать, {user.name}</a>
              <a href="/favorite">Избранное</a>
              <a href="/auth/logout">Выход</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

module.exports = Header;
