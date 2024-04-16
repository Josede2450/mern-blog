// Models are the rules that need to be follow for using the database

import mongoose from "mongoose"; //Import the data base

//Squema of rules
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } //Tiemestamp give the times when was created
);

const User = mongoose.model("User", userSchema);

export default User;
