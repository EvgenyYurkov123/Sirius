require('dotenv').config(); 
require('@babel/register');
const cors = require('cors');
const morgan = require('morgan'); 
const express = require('express'); 
const app = express(); 

const dbConnectCheck = require('../server/db/dbConnectCheck');
const { PORT } = process.env || 3002;
const userRouter = require('./src/routes/userRouter')
dbConnectCheck();

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true }
));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/user', userRouter)



app.listen(PORT, () => {
  console.log('\x1b[33mСервер Успешно подключён!!!! \x1b[0m' ); 
});

