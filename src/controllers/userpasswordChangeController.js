import UserModel from "../models/usermodel.js";
import bcrypt from "bcrypt"; // Import bcrypt for hashing passwords

const userPasswordChangeController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid user",
      });
    }

    // Hash the new password before saving
    const salt = await bcrypt.genSalt(10); // Generate salt
    user.password = await bcrypt.hash(password, salt); // Hash the new password

    await user.save(); // Save the updated user

    return res.status(200).json({
      status: "success",
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      status: "failed",
      message: "Password changing failed",
    });
  }
};

export default userPasswordChangeController;
