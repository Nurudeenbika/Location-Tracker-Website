const express = require("express");
const env = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5050;
const userRouter = require("./routes/user.Routes");
const User = require("./model/userSchema");
const connectDb = require("./Db/db");

app.use(express.json());

connectDb();

app.use("api/v1/user", userRouter);
app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
