const express = require('express');
const app = express()
app.use(express.json());


const cors = require('cors')
app.use(cors())

const entryRouter = require('./routers/entries');
app.use('/entry', entryRouter)


module.exports = app;
