import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register ************************************

export const Register = async (req, res) => {
  try {
    const { myntraReg } = req.body;

    const { name, email, password, confirmPassword, role } = myntraReg;

    if (!name || !email || !password || !confirmPassword || !role)
      return res.status(404).json({
        success: false,
        message: "Please Fll all the fields",
      });

    if (password !== confirmPassword)
      return res.status(404).json({
        success: false,
        message: "password Doesnot Match",
      });

    const emailAlreadyExist = await User.find({ email });

    if (emailAlreadyExist.length) {
      return res.status(404).json({
        success: false,
        message: "User already exist Please Try Login",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "user Registered SuccessFully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal Server Error Register  From Catch block",
    });
  }
};

// Login ************************************

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password)
      return res.status(404).json({
        success: false,
        message: "All Fileds are mandatory",
      });

    const user = await User.findOne({ email });
    // console.log(user);

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });

    const samepassword = await bcrypt.compare(password, user.password);

    if (samepassword) {
      const userObj = {
        name: user.name,
        email: user.email,
        userId: user._id,
      };

      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

      //   console.log(token);

      return res.status(200).json({
        success: true,
        message: "Logged in success",
        user: userObj,
        token: token,
      });
    }

    return res.status(404).json({
      success: false,
      message: "invalid Credentials",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal Server Error From Catch block",
    });
  }
};

// Currentuser ******************************************

export const Currentuser = async (req, res) => {
  try {
    const { token } = req.body;

    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!decodeToken) {
      return res.status(404).json({
        success: false,
        message: "Token not Found",
      });
    }
    // res.send(decodeToken);
    // console.log(decodeToken);

    const userId = decodeToken?.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    // console.log(user);

    const currentuserObj = {
      name: user.name,
      email: user.email,
      userid: user._id,
    };

    return res.status(200).json({
      success: true,
      message: "Got Currentuser",
      user: currentuserObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal Server Error From Catch block",
    });
  }
};

export const Home = (req, res) => {
  res.send("Home");
};
