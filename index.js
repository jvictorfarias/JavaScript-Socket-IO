var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("Um usuário conectou!");

  socket.on("disconnect", function() {
    console.log("Um usuário desconectou!");
  });

  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
    console.log("chat message: " + msg);
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
