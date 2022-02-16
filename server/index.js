const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection successful'))
.catch((err) => console.log(err));

app.use(express.json());

// binding endpoint to the route
app.use("/api/auth", authRoute);

app.listen(4000, () => {
    console.log('Backend server is running!');
});