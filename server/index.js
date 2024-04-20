const express = require("express");
const env = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5050;
const userRouter = require("./routes/user.Routes");
const User = require("./model/userSchema");
const connectDb = require("./Db/db");
const http = require('http');
const socketIo = require('socket.io');


app.use(express.json());

connectDb();

app.use("/api/v1/user", userRouter);
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/protected', (req, res) => {
  res.send('Hello!')
});

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('sendLocation', (data) => {
    console.log('Received location:', data);
    io.emit('changeLocation', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () =>  console.log(`app listening on http://localhost:${port}`));


