const express = require('express')
const app = express()
const port = 3000

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`delete from people`)
connection.query(`insert into people (name) values ('Anderson')`)
connection.query(`insert into people (name) values ('Wagner')`)
connection.query(`insert into people (name) values ('Diego')`)
connection.query(`insert into people (name) values ('Davi')`)
connection.query(`insert into people (name) values ('Erick')`)
connection.query(`insert into people (name) values ('Adilson')`)

var people = []

connection.query("select name from people", function (err, result) {
    result.forEach(function (item, indice, array) {
        people.push(item.name)
    });
});

connection.end()

app.get('/', (req, res) => { 

    var content = "<h1>Full Cycle</h1> \n"
    content = content.concat("<br> \n")
    content = content.concat("<ul> \n")

    people.forEach(function (item, indice, array) {
        content =  content.concat('<li>' + item + '</li> \n')
    });
    
    content =  content.concat("</ul>")
    console.log(content)
  
    res.send(content)
})

app.listen(port, ()=> {
    console.log('Rodando na porta 3000!!!')
})