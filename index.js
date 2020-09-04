const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database')

const moment = require('moment');

let PORT = process.env.PORT || 3000;

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
        if (notes === undefined) {
            res.send([])
        }
        console.log(notes)
        res.send(notes)

    } catch (error) {
        res.send(error.message)
    }

});

app.post('/notes', (req, res) => {
    try {
        const body = {
            noteBody: req.body.notesBody,
            lastEdit: false,
            noteColor: req.body.noteColor,
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
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

        const body = {
            id,
            noteBody: req.body.notesBody,
            noteColor: req.body.noteColor|| db.notes.get(id).noteColor,
            lastEdit: true,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
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


app.listen(PORT, () => {
    console.log('Server started at 5053')
});