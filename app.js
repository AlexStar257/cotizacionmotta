const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
//tomar valor estatico : carpet ay se agrega public
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended: true }));

//     ARREGLO DE OBJETOS CON REGISTROS
let datos = [
	{
		matricula: "2020030301",
		nombre: "Margarita Lizarraga",
		sexo: "M",
		materias: ["Ingles", "Bse de datos", "Tecnologias I"],
	},
	{
		matricula: "2020030314",
		nombre: "Alejandro Trejo",
		sexo: "H",
		materias: ["Ingles", "Bse de datos", "Tecnologias I"],
	},
	{
		matricula: "2020030101",
		nombre: "Ariana Trejo",
		sexo: "M",
		materias: ["Ingles", "Base de datos", "Tecnologias I"],
	},
];

//jala la info dela ruta
app.get("/", (req, res) => {
	res.render("index", { titulo: "Mi primer pagina en JavaScript Embedded", nombre: "Alejandro Lizarraga Motta", grupo: "8-3", listado: datos });
});

// Tabla
app.get("/tabla", (req, res) => {
	const params = {
		numero: req.body.numero,
	};
	res.render("tabla", params);
});

app.post("/tabla", (req, res) => {
	const params = {
		numero: req.body.numero,
	};
	res.render("tabla", params);
});

// Cotización

app.get("/cotizacion", (req, res) => {
	const params = {
		valor: req.body.valor,
		pinicial: req.body.pinicial,
		plazo: req.body.plazo,
	};
	res.render("cotizacion", params);
});

app.post("/cotizacion", (req, res) => {
	const params = {
		valor: req.body.valor,
		pinicial: req.body.pinicial,
		plazo: req.body.plazo,
	};
	res.render("cotizacion", params);
});

//LA PAGINA ERROR VA AL FINAL DE GET/ POST
app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + "/views/404error.html");
});

const puerto = 3000;
app.listen(puerto, () => {
	console.log("Iniciando puerto");
});
