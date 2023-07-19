import { UserModel } from "../models/userModel";

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password)
      throw new Error("Please give all user details");
    const isExist = await user.find({ email });
    if (isExist) throw new Error("User already exist please login");
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};
