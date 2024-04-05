const mongoose = require("mongoose");
const uuid = require("uuid");

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuid.v4,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String, // You missed the type definition here
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    validate: {
      validator: function(value) {
        // Use a regular expression to check for a valid email format.
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format.'
    }
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  }
});

// Specify the name of the database collection in the model
const UserModel = mongoose.model("UserModel", UserSchema, "UrbanSnitchUsers");

module.exports = UserModel;
