const PORT = process.env.PORT || 7001
const express = require('express');
const app = express(); 

app.use(express.static('front_end')); 

app.listen(PORT, ()=> console.log('front server is running on', PORT));