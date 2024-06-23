const express = require('express')
const bcrypt = require('bcryptjs')
const login = require('../controllers/users')
const router = express.Router()


router.get('/',(req,res)=>{
	res.render('auth')
})

router.get('/login', (req,res)=>{
	res.render('login')
})

router.post( '/login' ,login)

router.get('/logout', (req,res)=>{
	req.session.destroy()
	res.redirect('/')
})

module.exports = router