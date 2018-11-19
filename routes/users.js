const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const postgresUserController = require('../controllers/postgresql/users');


router.get('/',postgresUserController.getUsers);


module.exports = router;
