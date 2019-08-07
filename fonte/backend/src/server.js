const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://master:123321@cluster0-q6abp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser : true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);