const React = require('react');
const Layout = require('../Layout');

function LoginPage() {
  return (
    <Layout>
      <form className="form-login">
        <h1>Вход</h1>
        <p>Почта</p>
        <input
          className="input-form"
          type="text"
          name="email"
          placeholder="Введите e-mail"
        />
        <p>Пароль</p>
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Введите пароль"
        />

        <div className="div-log"></div>

        <button className="button-form" type="submit">
          Войти
        </button>
        <script defer src="/js/logScript.js" />
      </form>
    </Layout>
  );
}

module.exports = LoginPage;
