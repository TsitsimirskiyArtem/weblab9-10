const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const LaptopSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    price: Number,
    power: Number
});

const Laptop = mongoose.model('Laptop', LaptopSchema, 'Laptop');

const URL = 'mongodb+srv://artem:12345@backenddb.cta5q.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB';

mongoose
    .connect(URL)
    .then(() => console.log('Connect to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.get('/laptops', async (req, res) => {
    try {
        const laptops = await Laptop.find();
        res.json(laptops);
    } catch (error) {
        res.status(500).json({ message: 'Помилка завантаження даних' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
});