const React = require('react');

function Header({ user }) {
  console.log(user);
  return (
    <div className="header">
      <a href="/main">Главная страница</a>
      <div>
        {!user && (
          <>
            <a href="/auth/registration">Регистрация</a>

            <a href="/auth/login">Вход</a>
          </>
        )}
        <div>
          {user && (
            <>
              <a href="/favorite">Избранное</a>
              <a href="/auth/logout">Выход</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

module.exports = Header;
