import bcryptjs from "bcryptjs";

import { User } from "../model/user.model.js";
import { createToken } from "../utils/user.util.js";

export const SignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Please provide all fields",
      });
    }
    const user = await User.findOne({ email });

    // Check if user already exists
    if (user) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const token = createToken(newUser._id, res);
    await newUser.save();

    // Respond with success message and user details
    res.json({
      success: true,
      message: "User created successfully",
      userId: newUser._id,
      token,
    });
  } catch (err) {
    // Log the error and respond with an error message
    console.error(err);
    res.json({
      success: false,
      message: "Error in SignUp",
      error: err.message,
    });
  }
};

export const SignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({
        success: false,
        message: "Please provide all fields",
      });
    }

    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = bcryptjs.compare(password, user.password);

    // Check password
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Create a token and set it in the response cookie
    const token = createToken(user._id, res);
    res.json({
      success: true,
      message: "User signed in successfully",
      userId: user._id,
      token,
    });
  } catch (err) {
    // Log the error and respond with an error message
    console.error(err);
    res.json({
      success: false,
      message: "Error in SignUp",
      error: err.message,
    });
  }
};

export const SignOut = (req, res) => {
  try {
    // Clear the token cookie to sign out the user
    res.clearCookie("token");
    res.json({
      success: true,
      message: "User signed out successfully",
    });
  } catch (err) {
    // Log the error and respond with an error message
    console.error(err);
    res.json({
      success: false,
      message: "Error in SignOut",
      error: err.message,
    });
  }
};
