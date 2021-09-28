const express = require ('express');

const app = express();

app.listen(3030, () => {
    console.log('Levantando el servidor', "http://localhost:3030")
});

const path = require ('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/register', (req, res) => {
    res.redirect('/');
});

app.post('/', (req, res) => {
    res.redirect('/');
});