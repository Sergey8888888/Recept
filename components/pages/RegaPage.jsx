const React = require('react');
const Layout = require('../Layout');

function RegPage() {
  return (
    <Layout>
      <form className="form-reg">
        <h2>Регистрация</h2>
        <p>Имя</p>
        <input
          className="input-form"
          type="text"
          name="name"
          placeholder="Имя пользователя"
        />
        <p>Почта</p>

        <input
          className="input-form"
          type="text"
          name="email"
          placeholder="email@example.com"
        />
        <p>Пароль</p>

        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
        />
        <div className="div-reg"></div>

        <button className="button-form" type="submit">
          Зарегистрироваться
        </button>
        {<script defer src="/js/regScript.js" />}
      </form>
    </Layout>
  );
}

module.exports = RegPage;
