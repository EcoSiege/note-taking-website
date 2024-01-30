const express = require('express');
const path = require('path');
const noteData = require('./db/db.json')
const PORT = 3001;

const app = process.env.PORT  ||  express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.status(200).json(noteData);
});

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} post note request recieved`);
});


app.listen(PORT, () => {
    console.log(`Notes app listening at http://localhost:${PORT}`);
  });