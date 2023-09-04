import User from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const {
      myntraUser,
      myntraEmail,
      myntraPassword,
      myntraCpassword,
      myntraRole,
    } = req.body.myntraReg;

    if (
      !myntraUser ||
      !myntraEmail ||
      !myntraPassword ||
      !myntraCpassword ||
      !myntraRole
    ) {
      return res.status(404).json({
        success: false,
        message: "please fill all the fields ",
      });
    }

    const emailExist = await User.find({ myntraEmail: myntraEmail });

    console.log(emailExist);

    if (emailExist?.length) {
      return res.status(404).json({
        success: false,
        message: "email already exists ",
      });
    }

    const hashPassword = await bcrypt.hash(myntraPassword, 10);

    const user = new User({
      myntraUser,
      myntraEmail,
      myntraPassword: hashPassword,
      myntraRole,
    });

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Registered Successs ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal error",
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body.loginInput;
    console.log(email, password);

    if (!email && !password)
      return res.status(404).json({
        success: false,
        message: "All fields are mandatory",
      });

    const user = await User.findOne({ myntraEmail: email });

    console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    const samePassword = await bcrypt.compare(password, user.myntraPassword);

    if (samePassword) {
      const userObj = {
        myntraUser: user.myntraUser,
        myntraEmail: user.myntraEmail,
        userId: user._id,
      };
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      //   console.log(token);

      return res.status(200).json({
        success: true,
        message: "Logged in Success",
        user: userObj,
        token: token,
      });
    }

    return res.status(404).json({
      success: false,
      message: "invalid credentials",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from catch block",
    });
  }
};

export const currentuser = async (req, res) => {
  try {
    const { token } = req.body;

    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

    // console.log(decodeToken);

    if (!decodeToken) {
      return res.status(404).json({
        success: false,
        message: "token is required",
      });
    }

    const userId = decodeToken?.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not Found",
      });
    }

    const userObj = {
      myntraUser: user.myntraUser,
      myntraEmail: user.myntraEmail,
      userId: user._id,
    };

    return res.status(200).json({
      success: true,
      message: "Got Current user",
      user: userObj,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from catch block",
    });
  }
};
