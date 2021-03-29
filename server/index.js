const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 1000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  const { id } = socket.client;
  socket.join('customer care');
  console.log(`new connection!: ${id}`);
  io.to('cutomer care').emit()
  socket.on("disconnect", () => {
    console.log(`user ${id} left`);
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));
