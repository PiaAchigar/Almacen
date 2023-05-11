const { Router } = require("express");
const {createUser,getUsers,getUserById, deleteUser, login} = require("../controllers/userController");

const router = Router();

router.post("/register", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/login", login);
//route.put("/:email", upDateUser);
router.delete("/:id", deleteUser);// utilizar req.params.id para eliminar por ID

module.exports = router;
