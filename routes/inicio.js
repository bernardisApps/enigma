const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
	const user = req.session.user || null
	/*user = {
		name:'matias',
		email:'matias@matias.com',
		id: 1,
	}*/
	res.render('home', {user})
})

module.exports = router