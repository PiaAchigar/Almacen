const { Router } = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  login,
  updatePassword,
} = require("../controllers/userController");

const router = Router();

router.post("/register", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
//route.put("/:email", upDateUser);
router.put("/password", updatePassword); // no es un path param, asi que va sin los :
router.delete("/:id", deleteUser); // utilizar req.params.id para eliminar por ID

module.exports = router;
