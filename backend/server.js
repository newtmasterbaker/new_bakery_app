const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Add this after your middleware
app.use('/api/auth', require('./routes/auth'));

// Database Connection
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Basic Route
app.get('/', (req, res) => {
    res.send('API Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
