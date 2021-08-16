const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => {
  console.log("connection")
  setTimeout(() => {
    io.emit("dan", "Hello");
  }, 200)

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    // decrypt your token here and set the user as following
    socket.user = {id: 1, name: "Youssef"}
    next();
  });
  socket.on("youssef", (message, e) => {
    socket.emit("dan", socket.user.name);
  });
});




httpServer.listen(3000);