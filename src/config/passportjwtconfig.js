import UserModel from "../models/usermodel.js";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import bcrypt from 'bcrypt';

passport.use(
  new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
    try {
      const user = await UserModel.findOne({ username });

      // If user not found
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: "Incorrect password." });
      }

      // Successful authentication
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

export { passport };
