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
const util = require('util');

const connection = mysql.createConnection(config)
const query = util.promisify(connection.query).bind(connection);

const createTableSql = `CREATE TABLE IF NOT EXISTS people (id int auto_increment primary key, name varchar(255))`;
connection.query(createTableSql);
const sql = `INSERT INTO people(name) values('Caio Queiroz')`
connection.query(sql);

app.get('/', async (req,res) => {
  const sqlSelect = `SELECT name FROM people;`;
  const rows = await query(sqlSelect);  
  res.send(`<h1>Full Cycle</h1>${rows.map(row => `<p>${row.name}</p>`)}`);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})