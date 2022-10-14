// setup express
const express = require('express');
const app = express();


//setup pg
const { Client } = require('pg')
//setup
const connectionString = 'postgres://postgres:postgrespw@localhost:49153/phone_book'

const cors = require('cors');

const client = new Client({
    connectionString: connectionString,
})

app.use(express.static('Public'))
app.use(express.json());

 app.use(cors());

client.connect();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello world")
})
//Previously used .GET/fetch to point to an API
//1st layer clie
app.get('/phone_book/owners', (req, res) => {

    client.query('SELECT * FROM owners')
    .then(result => res.send(result.rows))
    
})
app.get('/phone_book/owners/:name', (req,res)=>{
     const param = req.params.name;
     var str= param+'%'
    console.log( str)
    client.query(`SELECT * FROM owners WHERE name LIKE '${param}%'`)
    .then(result => res.send(result.rows))
})

app.post('/phone_book/owners', (req, res)=>{
    var newOwner = req.body
    client.query(`INSERT INTO owners(name, phone_number, address, business_name) VALUES ('${newOwner.name}', '${newOwner.phone_number}', '${newOwner.address}', '${newOwner.business_name}')`)

})

app.get('/phone_book/owners/delete/:id', (req,res)=>{
    const id = req.params.id;
    client.query('DELETE FROM owners where id= $1',[id])
    .then(result => res.send(result.rows))
})
app.get('/phone_book/owners/delete/:name', (req,res)=>{
    const id = req.params.id;
    client.query('DELETE FROM owners where name= $1',[id])
    .then(result => res.send(result.rows))
})

app.get('/phone_book/business', (req, res)=>{
    client.query('SELECT * FROM business')
    .then(result => res.send(result.rows))
})

app.get('/phone_book/business/:name', (req, res)=> {
    const name = req.params.name;
    client.query(`SELECT * FROM business where name='${name}%'`)
})

app.post('/phone_book/business/', (req, res)=>{
    var newBusiness = req.body; 
    client.query(`INSERT INTO business(business_name, phone_number, address, owner_name) VALUES ('${newBusiness.business_name}', '${newBusiness.phone_number}', '${newBusiness.address}', '${newBusiness.owner_name}')`)
})
// app.get('/owners/add/:new',(r) )
app.get('/phone_book/business/delete/:name', (req,res)=>{
    const name = req.params.id;
    client.query('DELETE FROM business where business_name= $1',[name])
    .then(res.send(JSON.stringify(req.params)))
})



app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})

//2 javascript tabs; one for server, one for manipulating HTML page
//For get requests import from server to html file to other file