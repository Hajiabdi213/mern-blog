import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.json({ message: "signup successful" });
  } catch (error) {
    return next(error);
  }
};

// Sign In Controller

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "Email and password are required"));
  }

  try {
    // cheking if the user exist or not
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    // checking if the password is correct or not
    const isPasswordMatch = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordMatch) {
      return next(errorHandler(401, "Invalid Password"));
    }

    // creating the token if the user credentials are correct
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    const { password: pass, ...rest } = validUser._doc;

    res.status(200).cookie("accessToken", token, { httpOnly: true }).json(rest);
  } catch (error) {
    next(error);
  }
};
