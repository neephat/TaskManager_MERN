require("dotenv").config();
const mongoose = require("mongoose");
const app = require('./app')

global.__basedir = __dirname;

const mongoUrl = process.env.MONGODB_URL.replace('<password>', process.env.MONGODB_PASSWORD)
mongoose.connect(mongoUrl)
    .then(()=> console.log("Successfully Connected to MongoDB"))
    .catch(err=> console.log("MongoDB Connection Failed"))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Backend App running on port ${port}`);
});