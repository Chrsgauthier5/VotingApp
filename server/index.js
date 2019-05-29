require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const handle = require('./handlers/index');
const routes = require('./routes')

const app = express(); //creates express application
const port = process.env.PORT

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req,res) => res.json({hello: 'world'}));
app.use('/api/auth', routes.auth);
app.use('/api/polls', routes.poll);


app.use(handle.errors);
app.use(handle.notFound);


app.listen(port, console.log(`Server listening on port: ${port}`)); //starts server
