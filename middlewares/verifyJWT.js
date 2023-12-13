const jwt = require("jsonwebtoken");
const generateTokens = require("../utils/authUtils");
const cookiesConfig = require("../config/cookiesConfig");

// логика проверки refresh token
function verifyRefreshToken(req, res, next) {
  // проверяем, если есть кука с refresh token
  const { refresh } = req.cookies;

  try {
    const { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);

    // если верификация прошла успешно, то кладем user в res.locals (зачем он там нужен?)
    res.locals.user = user;

    // сгенерируем  новые jwt токены
    const { accessToken, refreshToken } = generateTokens({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Возвращаем токены в httpOnly cookie при ответе
    // устанавливаем куки
    res.cookie("access", accessToken, {
      maxAge: cookiesConfig.maxAgeAccess,
      httpOnly: cookiesConfig.httpOnly,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: cookiesConfig.maxAgeRefresh,
      httpOnly: cookiesConfig.httpOnly,
    });

    // мы внутри мидлварки, поэтому отправляем запрос дальше
    next();
  } catch (error) {
    // сюда упали, если refresh кука была, но верификацию не прошла, значит - кука неккоретная
    res.clearCookie("refresh");
    next();
  }
}

// логика проверки access token
function verifyAccessToken(req, res, next) {
  // проверяем, если есть кука с access token
  const { access } = req.cookies;

  try {
    const { user } = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET);

    // если верификация прошла успешно, то кладем user в res.locals
    res.locals.user = user;

    // и отправляем запрос дальше
    next();
  } catch (error) {
    // если кука не прошла верификацию - ее надо почистить
    res.clearCookie("access");
    // возможно, у access token закончился срок, поэтому отправляем проверять refresh token
    verifyRefreshToken(req, res, next);
  }
}

function checkUser(req, res, next) {
  // по сути, проверка юзера - это проверка, есть ли кука с access token
  // поэтому тут вызываем нашу функцию, в которой прописана эта логика проверки
  verifyAccessToken(req, res, next);
}

module.exports = checkUser;
