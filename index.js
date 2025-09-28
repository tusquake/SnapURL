require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./connect');
const urlRoutes = require('./routes/url');

connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
const port = process.env.PORT || 8001;

// Enable CORS for all routes
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:8001'],
    credentials: true
}));

app.use(express.json());
app.use(express.static('public'));
app.use('/url', urlRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});