const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const path = require("path");

const app = express();
let server = http.createServer(app);

//permite hacer publica la carpeta public
const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

//midelwere para utilizar public
app.use(express.static(publicPath));

//IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require("./sockets/socket");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
