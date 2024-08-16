const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const corsOptions = {
    origin: process.env.CORS_OPTIONS_ORIGIN,
    credential: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const searchRouter = require('./routes/search');
const userRouter = require('./routes/users');
const favoriteRouter = require('./routes/favorites');
const drugRouter = require('./routes/drugs');
const postRouter = require('./routes/posts');

app.use('/search', searchRouter);
app.use('/users', userRouter);
app.use('/favorites', favoriteRouter);
app.use('/drugs', drugRouter);
app.use('/posts', postRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});