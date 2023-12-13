module.exports = function verifyAccess(req, res, next) {
  if (res.locals.user) {
    next();
  } else {
    res.status(403).json({ message: "You can not enter!" });
  }
};
