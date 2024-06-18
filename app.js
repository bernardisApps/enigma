const express = require('express')
const path = require('path')
const app = express()
const routerInicio = require('./routes/inicio')
const PORT = 3000

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', routerInicio)

app.get('/profile', (req,res)=>{
	res.render('profile')
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>{
	console.log('Servidor escuchando en puerto : ' + PORT)
})