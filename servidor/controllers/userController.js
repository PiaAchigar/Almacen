const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.id);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  // Verifico si el usuario existe en la base de datos
  const user = await userService.getUserByEmail(email);
  if (!user) {
    return res
      .status(401)
      .json({ message: "Credenciales inválidas", error: true });
  }
  // Verifico si la contraseña es correcta

  const validPassword = await bcrypt.compare(password, user.password);
  //console.log(password) -> es un requestId:"sdsdsd" , signal:{}
  if (!validPassword) {
    return res
      .status(401)
      .json({ message: "Credenciales inválidas", error: true });
  }

  // Crear y devolver token JWT
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  //3h /1d  es la duración del token
  //console.log(res.status(200).json({ token })) .text o .send tb manda la info  (TCP unidireccional)
  return res.status(200).json({ token });
  //y como lo redirecciono a que entre a la app ??
  //usar Redux acá
};

const updatePassword = async (req, res) => {
  const { id, password } = req.params;
  try {
    await userService.updatePassword(id, password);
    return res.status(204).end();
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  getUsers,
  getUserById,
  login,
  updatePassword,
  deleteUser,
};
