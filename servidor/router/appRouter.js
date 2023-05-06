const { Router } = require("express");
const userRouter = require("./userRouter");

const appRouter = Router();
appRouter.use("/users", userRouter);

module.exports = appRouter;


// const { isAuthenticated } = require("../middlewares/auth");
// const AppService = require("../Services/AppService");
// const AppController = require("../Controller/AppController");

// const appService = new AppService();
// const appController = new AppController(appService);

// appRouter.get("/info", appController.getInfo.bind(appController));

// appRouter.get("/", isAuthenticated, appController.home);

// appRouter.get("*", appController.notFound);