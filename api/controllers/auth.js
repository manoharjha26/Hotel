import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// export const register = async (req, res, next) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };

export const registerUser = async (req, res) => {
  try {
      const { id, name, email, password } = req.body;
      // check if name was entered
      if (!id) {
          return res.json({
              errror: "id is required"
          })
      }

      // check if name was entered
      if (!name) {
          return res.json({
              errror: "name is required"
          })
      }

      // check if password is good
      if (!password || password.length < 6) {
          return res.json({
              error: "Password is required and should be at least 6 character"
          })
      }

      const exist = await User.findOne({ email })
      if (exist) {
          res.json({
              error: "email is taken already"
          })
      }

      const hashPassword = await hashedPassword(password);


      const user = await User.create({
          id,
          name,
          email,
          password: hashPassword,
      })

      return res.json(user)
  } catch (error) {
      console.log(error)
  }
}




export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};






// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
// import jwt from "jsonwebtoken";

// export const register = async (req, res, next) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (!user) return next(createError(404, "User not found!"));

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(createError(400, "Wrong password or username!"));

//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT
//     );

//     const { password, isAdmin, ...otherDetails } = user._doc;
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ details: { ...otherDetails }, isAdmin });
//   } catch (err) {
//     next(err);
//   }
// };