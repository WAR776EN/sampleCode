const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config();

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());

const productRoutes = require('./routes/products')
const { errorMaster, _404handler } = require('./middlewares/errorHandler')

app.use(productRoutes)

app.use(errorMaster)
app.use('*', _404handler)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running at port ${ PORT}`))