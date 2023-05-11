//import {bcrypt} from 'bcrypt';
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = new userModel({
    name: user.name,
    email: user.email,
    password: hashedPassword,
  });
  return await newUser.save();
};

const getUsers = async () => {
  return await userModel.find();
};

const getUserById = async (id) => {
  return await userModel.findById(id);
};

const getUserByEmail = async (email) => {
  return await userModel.findOne({ email });
};

const updateUser = async (id, user) => {
  delete user.password;
  return await userModel.findByIdAndUpdate(id, user);
};

const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

const verifyUser = async (email, password) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    return false;
  }
  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) {
    return false;
  }
  return user;
};

const updatePassword = async (id, password) => {
  const newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  return await userModel.updateOne({ _id: id }, { password: newPassword });
};

const deleteOne = async (id) => {
  await userModel.deleteOne({ _id: id });
}
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  verifyUser,
  updatePassword,
  getUserByEmail,
  deleteOne
};
