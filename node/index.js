const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', async (req,res) => {
  const sql = `INSERT INTO people(name) values('Caio Queiroz')`
  await connection.query(sql)
  // const sqlSelect = `SELECT * FROM people;`;
  // const rows = connection.query(sqlSelect);
  // connection.end()
  res.send(`<h1>Full Cycle</h1><p></p>`);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})