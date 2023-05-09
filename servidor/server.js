//Capa 1
const express = require("express");
const { Server: HttpServer } = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();  // con ésta linea lo que hago es inyectar todo lo que esta en el .env como variables de entorno

const PORT = process.env.PORT || 8080;

// mongoose.connect("mongodb://admin:123456@localhost:27017/almacen?authSource=admin").then(()=>{
//   console.log("conectado a mongo")
// }).catch(error => {
//   console.log(error)
// });

//como me conecto a la bd de mongoAtlas??
mongoose.connect(
  "mongodb+srv://achigarpia:6hYUReXYEjM3BRSa@clusteralmacen.98ovoph.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
  console.log("conectado a mongo")
}).catch(error => {
  console.log(error)
});;

const appRouter = require("./router/appRouter");

const app = express();
app.use(cors()); 

const httpServer = new HttpServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", appRouter);

app.use((req, res, next) => {
  console.info(`Ruta: ${req.path} Metodo: ${req.method}`);
  return next();
});

app.get("*", (req, res) => {
  console.warn(`Ruta: ${req.path} Metodo: ${req.method}`);
  return res.status(404).json({ message: "page not found" });
});

httpServer.listen(PORT, () =>
  console.log(`Servidor escuchando en puerto ${PORT}`)
);
//module.exports = server;
