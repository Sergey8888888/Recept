const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');

// REG
router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name && email && password) {
      const hash = await bcrypt.hash(password, 10);
      await User.create({
        name,
        email,
        password: hash,
      });

      res.json({
        success: true,
        message: `Пользователь ${name} успешно зарегестрирован!`,
      });
    } else {
      res.json({ message: 'Заполните все поля!', success: false });

      const findUser = await User.findOne({ where: { email } });
      if (findUser) {
        res.json({
          success: false,
          message: 'Такой пользователь уже зарегистрирован!',
        });
      }
    }
  } catch (error) {
    res.json({
      success: false,
      message: 'Такой пользователь уже зарегистрирован!',
    });
  }
});
// LOG
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
    return res.json({ message: 'Заполните все поля!' });
  }
  try {
    const userInDb = await User.findOne({ where: { email } });
    console.log(userInDb);
    if (!userInDb) {
      return res.json({ success: false, message: 'Пользователь не найден!' });
    }

    const check = await bcrypt.compare(password, userInDb.password);
    if (!check) {
      return res.json({
        success: false,
        message: 'Неверный логин или пароль!',
      });
    }

    // сгенерируем jwt токены
    const { accessToken, refreshToken } = generateTokens({

      // здесь user
      user: {
        // а здесь уже userInDb с 
        id: userInDb.id,
        name: userInDb.name,
        email: userInDb.email,
      },
    });

    // устанавливаем куки
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    // отправляем ответ
    return res.json({
      success: true,
      message: `Авторизация ${userInDb.name} успешна!`,
    });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error });
  }
});

module.exports = router;
