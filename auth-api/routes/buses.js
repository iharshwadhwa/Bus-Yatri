const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const db = mongoose.connection;

router.get('/', async (req, res) => {
  try {
    const busesCollection = db.collection('buses');
    const buses = await busesCollection.find().toArray();
    res.json(buses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching buses');
  }
});

router.post('/addBus', async (req, res) => {
  try {
    const { busName, departure, arrival, duration } = req.body;
    const busesCollection = db.collection('buses');
    const result = await busesCollection.insertOne({ busName, departure, arrival, duration });
    if (!req.session) return res.status(500).json({ error: 'Session not available' });
    req.session.msg = result.acknowledged ? "Bus added successfully" : "Failed to add bus";
    res.status(201).json({ message: req.session.msg });
  } catch (error) {
    console.error('Error adding bus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
