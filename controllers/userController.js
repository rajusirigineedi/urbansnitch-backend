const userModel = require('../models/userModel');

const SUCCESS_MESSAGE = 'Data fetched successfully';
const FAILURE_MESSAGE = 'Some error fetching the data';

// GET /users
exports.getUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    res.status(200).json({ result : allUsers, status: true, message: SUCCESS_MESSAGE});
  } catch(err) {
    res.status(400).json({ error: err,status: false,message:FAILURE_MESSAGE});
  }
};

// GET /users/:id
exports.getUserById = async (req, res) => {
  const _id = Object(req.params.id);
  try {
    const user = await userModel.find({ _id });
    res.status(200).json({ result: user, status: true, message:SUCCESS_MESSAGE });
  } catch(err) {
    res.status(500).json({ error: err,status: false,message:FAILURE_MESSAGE });
  }
};

// POST /users
exports.createUser = async (req, res) => {
  const userReq = req.body;
  try {
    await userModel.create(userReq);
    res.status(200).json({ result: user, status: true, message:SUCCESS_MESSAGE });
  } catch(err) {
    res.status(400).json( { error:err,status:false,message:FAILURE_MESSAGE });
  }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
  const _id = Object(req.params.id);
  const data = req.body;
  try {
    const updatedUser = await userModel.updateOne({ _id},{$set:data});
    res.status(200).json({ result : updatedUser, status: true, message: 'User updated successuflly.'})    
  } catch(err) {
    res.status(500).json({ result : err, status:false, message: 'Failed to update the user.'});
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  const { _id } = Object(req.params.id);
  try {
    const deletedUser = await userModel.findOneAndDelete({ _id });
    res.status(200).json({ result: deletedUser, status: true, message: 'User has been deleted successfully.' });
  } catch(err) {
    res.status(500).json({ result: err, status: false, message:'Failed to delete the user.'});
  }
};
