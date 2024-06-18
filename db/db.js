const mysql = require('mysql2');


const connection = mysql.createConnection({
	host:'localhost',	
	user:'root',
	database:'enigma',
})

connection.connect((err)=>{
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    throw err;
  }
  console.log('Conectado a MySQL...');
});


module.exports = connection