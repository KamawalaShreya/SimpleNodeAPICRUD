const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/index', userController.getUsers);
router.get('/get-user/:id', userController.getUserById);

router.post('/add', userController.addUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;