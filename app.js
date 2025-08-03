require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/index');

app.use(express.json());
app.use('/', indexRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});



