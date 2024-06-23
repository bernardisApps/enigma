const db = require('../db/db.js')

const login = (req, res) =>{

	const sql = `SELECT * FROM users WHERE email='${req.body.email}'`
	db.query(sql, (err,results)=>{

		if(err) throw err

		if (results.length > 0){

			const isCorrect = results[0].password === req.body.password

			if (isCorrect){
				const user = {
					name: results[0].name,
					email: results[0].email,
					id: results[0].id
				}
				req.session.user = user
				res.redirect('/')
			}else{
				res.render('login',{message:'Contraseña incorrecta'})
			}
		}else{
			res.render('login',{message:'No existe este email en nuestros registros'})
		}
		
	})
}

module.exports = login