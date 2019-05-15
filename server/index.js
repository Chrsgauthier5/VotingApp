const express = require('express');

const app = express(); //creates express application
const port = 4000;

const handle = require('./handlers/index');


app.get('/', (req,res) => res.json({hello: 'world'}));


app.use(handle.errors);
app.use(handle.notFound);


app.listen(port, console.log(`Server listening on port: ${port}`)); //starts server
