const { Router } = require("express");
const userRouter = require("./userRouter");

const appRouter = Router();
appRouter.use("/user", userRouter);//el delete y el post van por acá
appRouter.get("/users", userRouter);
//para el login usá passport.js min 15 de "Node.js Passport Login System Tutorial"
//appRouter.post("/user", userRouter);//acá va el /user/login o en el archivo userRouter??
//appRouter.delete("/", userRouter); // aun no funciona
module.exports = appRouter;

// const { isAuthenticated } = require("../middlewares/auth");
// const AppService = require("../Services/AppService");
// const AppController = require("../Controller/AppController");

// const appService = new AppService();
// const appController = new AppController(appService);

// appRouter.get("/info", appController.getInfo.bind(appController));

// appRouter.get("/", isAuthenticated, appController.home);

// appRouter.get("*", appController.notFound);
