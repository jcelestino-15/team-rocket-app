const express = require("express");
const connectDB = require('./database/connection.js')
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = express.Router();

dotenv.config();

app.use("/",router);

connectDB();
app.use(express.json({ extended: false }));
router.post('/api/questionModel', require('./api/Question'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on port: ' +PORT));

module.exports = app;

