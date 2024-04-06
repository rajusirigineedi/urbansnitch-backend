const express = require('express')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const URL = process.env.DATABASE_URL;
app.use(express.json());
app.use(cors());
console.log(URL);
mongoose.connect(
    URL,
    {
        useNewUrlParser:true
    })
    .then(() => console.log("Connected to database successfully"))
    .catch((err) => console.log("Failed to connect to database",err));
app.use(userRouter);
app.listen(PORT,() => {
    console.log('server is running at port:'+PORT);
});