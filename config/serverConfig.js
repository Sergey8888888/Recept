const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { verifyAccessToken } = require('../middlewares/verifyJWT');
const ssr = require('../middlewares/ssr');

module.exports = function serverConfig(app) {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(ssr);
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(fileUpload());
};




// не подключили verify MW