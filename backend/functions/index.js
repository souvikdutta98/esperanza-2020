/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");
const helmet = require("helmet");

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
const app = express();
const queryCollection = db.collection("queries");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/post-query', (req, res) => {
    let docRef = db.collection('users');

    docRef.add({
        name: req.body.name,
        email: req.body.email,
        queryString: req.body.queryString
    }).then(_ => {
        console.log("Inserted data", req.body);
        res.status(201).json({ successful: true });
    }).catch(error => {
        console.log(error);
        res.status(400).json({ successful: false });
    })


});

app.get("/queries", (req, res) => {
    db.collection('queries').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
})

exports.query_api = functions.https.onRequest(app);