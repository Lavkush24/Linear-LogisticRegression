const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
const port = 8080



app.use('/', (req,res) => {
    res.send("")
})

app.listen(port)