const express = require('express')
const router = express.Router()
//const getUsers = require('../controllers/userController')

//router.get('/', getUsers)
router.get('/', (req,res)=>{
	res.render('home')
})

module.exports = router