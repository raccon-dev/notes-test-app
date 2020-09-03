const { DataStore } = require('notarealdb');

const store = new DataStore("./data");

module.exports = {
    notes: store.collection("notes")
}