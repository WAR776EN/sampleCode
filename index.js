const express = require('express')
const app = express()
// const route = require('./router')
const cookieParser = require('cookie-parser')

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// const { validateToken } = require('./controller/authentication')
// app.use('/v1', validateToken, route)
// app.use('/v1', route)
app.listen(port, () => console.log(`server is running at port ${ process.env.PORT }`))
// module.exports = app;