const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());

const { errorMaster, _404handler } = require('./middlewares/errorHandler')


app.use(errorMaster)
app.use(_404handler)
app.listen(port, () => console.log(`server is running at port ${ process.env.PORT }`))