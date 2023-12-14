require('@babel/register');

require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const serverConfig = require('./config/serverConfig');

const app = express();
serverConfig(app);

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`NA SVYAZI ${PORT}`));
