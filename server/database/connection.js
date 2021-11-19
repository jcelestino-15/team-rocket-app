const mongoose = require('mongoose');

const connectDB = async () => {

    const dbURL = process.env.DB_URL
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('db connected')
};

module.exports = connectDB;
