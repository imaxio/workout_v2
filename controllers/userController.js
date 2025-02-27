const { json } = require('express/lib/response');
const User = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
            //res.status(201).json(user);
            res.status(201).json({ 
                message: 'User successfully created', 
                user: user 
            });
    } catch (error) {
            res.status(500).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
            res.status(200).json(users);
    } catch (error) {
            res.status(500).json({ error: error.message });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { user_id: req.params.id }
    });
    if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        //res.status(200).json(updatedUser);
        res.status(200).json({
            message: 'User succesfully updated',
            user: updatedUser
        })
    } else {
        res.status(404).json({ message: 'User not found' });
    }
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { user_id: req.params.id }
    });
    if (deleted) {
        //res.status(204).send();
        res.status(200).json({
            message: 'User successfully deleted'
        })
    } else {
        res.status(404).json({ message: 'User not found' });
    }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
