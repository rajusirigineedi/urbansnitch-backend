const express = require('express')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const URL = process.env.DATABASE_URL;
const url = 'mongodb+srv://savenotes:savehere123@notes.dckjsam.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json());
app.use(cors());
mongoose.connect(
    url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("Connected to database successfully"))
    .catch((err) => console.log("Failed to connect to database",err));
app.use(userRouter);
app.listen(PORT,() => {
    console.log('server is running');
});