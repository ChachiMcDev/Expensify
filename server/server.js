const express = require('express');
const { dbconnect, client } = require('./mongoConfig');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
ObjectId = require('mongodb').ObjectId

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://192.168.1.5:9000' // Replace with your React app's origin
}));
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'expensify';
// const db = client.db(dbName);
// const collectionName = db.collection('tests');



app.get('/api/expenses', async (req, res) => {
    //remove this
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    try {
        await client.connect();
        // const db = client.db(dbName);
        // const collection = db.collection('documents');
        // const addOne = await collectionName.insertOne({
        //     description: "NewGuy Bill",
        //     note: "hmmmm",
        //     amount: 300,
        //     createdAt: new Date(1727801255069)
        // });

        const expenses = await dbconnect.find().toArray();
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

//SEND AS JSON GENIOUS
app.post('/api/addexpense', async (req, res) => {
    //  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    try {
        await client.connect();
        const document = req.body; // Get data from the POST request body

        const result = await dbconnect.insertOne(document);

        return res.status(201).json({ message: "Document inserted", result: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error inserting document" });
    }
});

app.delete('/api/deleteexpense', async (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE');
    try {
        await client.connect();
        const id = req.body;
        console.log(id);
        const result = await dbconnect.deleteOne({ _id: new ObjectId(id) });
        console.log(result);
        res.status(200).json({ message: "Document deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting document" });
    }
});

app.patch('/api/editexpense', async (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH');
    try {
        await client.connect();
        const expense = req.body;
        const id = expense._id;
        delete expense._id;

        const result = await dbconnect.updateOne({ _id: new ObjectId(id) }, { $set: expense });
        res.status(200).json({ message: "Document updated" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating document" });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


