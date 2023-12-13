module.exports = function redirectNoNauth(req, res, next) {
  if (!res.locals.user) {
    res.redirect("/");
  } else {
    next();
  }
};
