import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customError.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) == 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
// export const login = async (req, res) => {
//   const givenEmail = req.body.email;
//   const givenPassword = req.body.password;
//   const userFromDb = await User.findOne({ email: givenEmail });
//   if (!userFromDb) {
//     throw new UnauthenticatedError("invalid credentials");
//   }
//   const isPasswordCorrect = await comparePassword(
//     givenPassword,
//     userFromDb.password
//   );
//   if (!isPasswordCorrect) {
//     throw new UnauthenticatedError("invalid credentials");
//   }
//   res.send("login");
// };

export const login = async (req, res) => {
  // check if user exists
  // check if password is correct

  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: (process.env.NODE_ENV = "production"),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};
