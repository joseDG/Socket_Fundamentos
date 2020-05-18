const { io } = require("../server");

io.on("connection", (client) => {
  console.log("usuario conectado");

  //enviar informacion al cliente
  client.emit("enviarMensaje", {
    usuario: "Maria Elisa",
    mensaje: "Bienvenido a esta aplicacion",
  });

  //se verifica cuando un susario se desconecta.
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  //Escuchar el cliente
  client.on("enviarMensaje", (data, callback) => {
		
		console.log(data);

		client.broadcast.emit('enviarMensaje', data);

    // if (mensaje.usuario) {
    //   callback({
    //     res: "TODO SALIO BIEN",
    //   });
    // } else {
    //   callback({
    //     res: "TODO SALIO MAL!!!!!!",
    //   });
		// }
		

	});
	
});
