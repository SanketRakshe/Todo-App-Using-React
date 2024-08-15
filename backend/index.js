const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
    console.log(`Your server are listening on http://localhost:${PORT}`);
});