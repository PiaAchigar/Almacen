const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUser
}