var socket = io();

socket.on("connect", function () {
	console.log("Conectado al servidor");
});

//escuchar
socket.on("disconnect", function () {
	console.log("Perdimos conexión con el servidor");
});

//Enviar informacion
socket.emit(
	"enviarMensaje", {
		usuario: "Jose Diaz",
		mensaje: "Hola mundo",
	},
	function (res) {
		console.log("respuesta server: ", res);
	}
);

//Escuchar informacion
socket.on("enviarMensaje", function (mensaje) {
	console.log("Servidor", mensaje);
});