require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

// const generateTokens = require('../../utils/authUtils');

// reg
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
