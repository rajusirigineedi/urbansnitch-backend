const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users
router.get('/users', userController.getUsers);

// POST /users
router.post('/users', userController.createUser);

// GET /users/:id
router.get('/user/:id', userController.getUserById);

// PUT /users/:id
router.put('/user/:id', userController.updateUser);

// DELETE /users/:id
router.delete('/user/:id', userController.deleteUser);

router.get('/*',(req,res) => {
    res.status(404).json({error:'No data here'});
})
module.exports = router;
