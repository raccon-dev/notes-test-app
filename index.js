const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())





app.get('/notes', (req, res) => {
    try {
        res.send(db.notes.list())
    } catch (error) {
        res.send(error.message)
    }

});

app.get('/notes/:id', (req, res) => {

    try {
        const id = req.params.id;
        const notes = db.notes.get(id);
        res.send(notes)

    } catch (error) {
        res.send(error.message)
    }

});

app.post('/notes', (req, res) => {
    try {
        const d = new Date(Date.now());
        const body = {
            ...req.body,
            date: d.toString(),
        };
        db.notes.create(body)
        res.sendStatus(200)
    } catch (error) {
        res.send(error.message)
    }
});

app.put('/notes/:id', (req, res) => {
    try {
        const id = req.params.id;
        const d = new Date(Date.now());

        const body = {
            ...req.body,
            id,
            edited: d.toString(),
        };

        db.notes.update(body);
        res.sendStatus(200)

    } catch (error) {
        res.send(error.message)
    }



});

app.delete('/notes/:id', (req, res) => {
    try {
        db.notes.delete(req.params.id)
        res.sendStatus(200)
    } catch (error) {
        res.send(error.message)
    }

});


app.listen(5053, () => {
    console.log('Server started at 5053')
});