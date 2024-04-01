// index.js
const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    res.sendfile(__dirname + '/index.html')
}

const serveDonate = (req, res, next) => {
    res.send('<h1>Learn How To Donate</h1>')
}

const serveData = (req, res, next) => {
    const data = [{ 
        name: 'Izzy',
        age: 'old',
        car: 'still dreaming'
    }]
    res.send(data)
}

const serveLightOrDark = (req, res, next) => {
    const alliance = req.query.alliance || "Light";
    res.send(`My Alliance is to the ${alliance} side`)
}

app.get('/', serveIndex);
app.get('/donate', serveDonate);
app.get('/api/data', serveData);
app.get('/api/lightordark', serveLightOrDark);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 