const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./controllers/userRoute.js');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://test:12345@cluster0.5wtbnoo.mongodb.net/journaldb");

var db = mongoose.connection;

db.on("open", () => console.log("DB connected"));
db.on("error", (error) => console.error("MongoDB connection error:", error));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/userRoute', userRoute);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
