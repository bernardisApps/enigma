const db = require('../db/db.js')

const getUsers = (req,res) =>{
	const sql = 'SELECT * FROM personas'
	db.query(sql, (err,results)=>{
		if(err) throw err
		res.render('home', {results})		
	})
}

module.exports = getUsers