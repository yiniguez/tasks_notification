import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const user = await User.find();
  return res.json(user);
};
