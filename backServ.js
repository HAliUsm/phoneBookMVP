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
app.get('/owners', (req, res) => {

    client.query('SELECT * FROM owners')
    .then(result => res.send(result.rows))
    
})
app.get('/owners/:name', (req,res)=>{
    const name = req.params.id;
    client.query('SELECT * FROM owners where name= $1',[name])
})

app.get('/business', (req, res)=>{
    client.query('SELECT * FROM business')
    .then(result => res.send(result.rows))
})

app.get('/business/:name', (req, res)=> {
    const name = req.params.id;
    client.query('SELECT * FROM business where name= $1',[name])
})

// app.get('/owners/add/:new',(r) )


 app.get('/phonebook/delete/:id', (req, res) => {
    //  req.params.id
     client.query('DELETE FROM jobs where id= $1',[req.params.id])
     
     res.send(JSON.stringify(req.params))
//     client.query(`INSERT INTO jobs (job, location) VALUE (${/*inputjob*/}, ${/*inputLocation */}) `)
//     .then(result => res.send(result.rows))
 })


app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})

//2 javascript tabs; one for server, one for manipulating HTML page
//For get requests import from server to html file to other file