//Capa 1
const express = require("express");
const { Server: HttpServer } = require("http");

//const mongoose = require("mongoose");
//const dotenv = require("dotenv")
//dotenv.config(); con ésta linea lo que hago es inyectar todo lo que esta en el .env como variables de entorno

//como me conecto a la bd de mongoAtlas??
//mongoose.connect("mongodb://localhost:27017/30965-clase38");
/*mongoose.connect(
  "mongodb+srv://pia:EyBuOppa7XvDu65z@cluster0.5z86n.mongodb.net/?retryWrites=true&w=majority"
);
*/
//const passport = require("passport");
// //const session = require("express-session");
// const flash = require("express-flash");
// //const initializePassport = require("./config/passport");
// const compression = require("compression");

// const connectDB = require("./config/database");
//const logger = require("./utilities/logger");


// //const yargs = require("yargs");
// const ProductService = require("./Services/ProductService");
// //const randomRouter = require("./Routers/randomRouter")
const appRouter = require("./Routers/appRouter");
// const authRouter = require("./Routers/authRouter");
// const productRouter = require("./Routers/productRouter");

//const userRouter = require("./Routers/userRouter");
const cors = require("cors");

const app = express();

app.use(cors()); //cors a nivel de aplicación
//app.get("/", cors() , (req, res)=>{res.json({message:"Hello World"})}) ésto en a nivel ruta
//tambien le puedo pasar por un objeto y especificar en que dominio si puede acceder
//app.use(cors({origin:["http://myDominio.com","https://docs.google.com"]}))
//DEBO DE CONFIGURAR ÉSTO PARA EL PROYECTO FINAL???
/*let corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus:200,
  methods:"GET"
}
app.use(cors(corsOptions))
*/
//const graphQL = require("./graphQL/graphQL");
// const server = () => {
//   const app = express();
 const httpServer = new HttpServer(app);
//   const io = new IOServer(httpServer);

//   connectDB(process.env.MONGODB_URI);
  //initializePassport(passport);

//   const productService = new ProductService();
//   const messageService = new MessageService();

  //app.use("/graphql", graphQL());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
//   app.use(
//     session({
//       secret: process.env.SESSION_SECRET,
//       resave: true,
//       saveUninitialized: true,
//       rolling: true,
//       cookie: {
//         maxAge: 1000 * 60 * 10,
//       },
//     })
//   );
//   app.use(passport.initialize());
//   app.use(passport.session());
//   app.use(flash());
  app.use(express.static("./public"));// lo tengo que enlazar con React - o sea va por fetch

//   app.use(compression());
//   app.use("/auth", authRouter);
//   app.use("/products", productRouter);
  app.use("/", appRouter);
  //app.use("/api/users", userRouter);

  app.use((req, res, next) => {
    logger.info(`Ruta: ${req.path} Metodo: ${req.method}`);
    return next();
  });

  const PORT = process.env.PORT || 8080;

//   app.engine(
//     "hbs",
//     engine({
//       extname: ".hbs",
//       defaultLayout: `${__dirname}/views/index.hbs`,
//       layoutsDir: `${__dirname}/views/layouts`,
//       partialsDir: `${__dirname}/views/partials`,
//     })
//   );
  // __dirname devuelve la ruta del directorio
//   app.set("views", "./views");
//   app.set("view engine", "hbs");

//   app.get("*", (req, res) => {
//     logger.warn(`Ruta: ${req.path} Metodo: ${req.method}`);
//     return res.status(404).json({ message: "page not found" });
//   });

//   io.on("connection", async (socket) => {
//     console.log(`nuevo usuario id: ${socket.id}`);
//     const messages = await messageService.getAll();

//     //socket.emit("success", normalizeMessages(messages));
//     socket.on("addProduct", async (data) => {
//       const newProduct = await productService.createProduct(data);
//       io.emit("newProduct", newProduct);
//     });

    //chat
    // socket.on("login", async (user) => {
    //   const messages = await messageService.getAll();
    //   normalizeMessages(messages);
    //   socket.emit("success", normalizeMessages(messages));
    // });

    // socket.on("addMessage", async (data) => {
    //     const newMessage = await messageService.createMessage(data);
    //     io.emit("newMessage", newMessage);
    // });
//   });

  httpServer.listen(PORT, () =>
    console.log(`Servidor escuchando en puerto ${PORT}`)
  );
//};

// app.listen(PORT, () =>
//   console.log(`Servidor esta escuchando en el puerto ${PORT}`)
// );

//module.exports = server;
