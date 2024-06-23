const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session');
const inicio_routes = require('./routes/inicio')
const auth_routes = require('./routes/auth')

const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret: 'bruno2018',
    resave: false,
    saveUninitialized: true
}));

app.use('/', inicio_routes)

app.use('/auth', auth_routes)

app.listen(PORT,()=>{
	console.log('Servidor escuchando en puerto : ' + PORT)
})