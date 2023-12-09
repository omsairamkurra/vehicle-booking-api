const express = require('express');
const router = express.Router();
const {getAllUsers,createUser} = require('../controllers/userController');

router.get('/user', getAllUsers);
router.post('/user', createUser);

module.exports = router
