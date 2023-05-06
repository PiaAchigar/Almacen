const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const createUser = async (user) => {
    const password = bcrypt.hashSync(user.password, 10);
    user.password = password;
    const newUser = new userModel({ name: user.name, email: user.email, password: user.password });
    return await newUser.save();
}

const getUsers = async () => {
    return await userModel.find();
}

const getUserById = async (id) => {
    return await userModel.findById(id);
}

const updateUser = async (id, user) => {
    delete user.password
    return await userModel.findByIdAndUpdate(id, user);
}

const deleteUser = async (id) => {
    return await userModel.findByIdAndDelete(id);
}

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
}

const updatePassword = async (id, password) => {
    const newPassword = bcrypt.hashSync(password, 10);
    return await userModel.updateOne({ _id: id }, { password: newPassword });
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    verifyUser,
    updatePassword
}