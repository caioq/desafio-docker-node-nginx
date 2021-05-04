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
const createTableSql = `CREATE TABLE IF NOT EXISTS people (id int auto_increment primary key, name varchar(255))`;
connection.query(createTableSql);
const sql = `INSERT INTO people(name) values('Caio Queiroz')`
connection.query(sql);

app.get('/', (req,res) => {
  res.send(`<h1>Full Cycle</h1>`);

  const sqlSelect = `SELECT name FROM people;`;
  connection.query(sqlSelect, (err, rows) => {
    console.log('People:', rows);
  })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})