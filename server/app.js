require('dotenv').config({ path: __dirname + '/.env' });
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./middlewares/errorHandler");

const corsOptions = {
  origin: process.env.CORS_OPTIONS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

const searchRouter = require("./routes/search");
const userRouter = require("./routes/users");
const favoriteRouter = require("./routes/favorites");
const drugRouter = require("./routes/drugs");

app.use("/search", searchRouter);
app.use("/users", userRouter);
app.use("/favorites", favoriteRouter);
app.use("/drugs", drugRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
