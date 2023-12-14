const router = require('express').Router();
const LoginPage = require('../../components/pages/LogPage');
const RegaPage = require('../../components/pages/RegaPage');

router.use('/registration', (req, res) => {
  const html = res.renderComponent(RegaPage);
  res.send(html);
});

router.use('/login', (req, res) => {
  const html = res.renderComponent(LoginPage);
  res.send(html);
});
router.get('/logout', (req, res) => {
  res.clearCookie('refresh').clearCookie('access');
  res.locals.user = undefined;
  res.redirect('/');
});
module.exports = router;
