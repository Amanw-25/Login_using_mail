import { Router } from "express";
import passport from "passport";
import upload from "../middlewares/upload.js";
import {
  usersignupController,
  userloginController,
  userlogoutController,
  userpasswordChangeController,
  uploadProfilePhotoController,
} from "../controllers/index.js";

const Authroutes = Router();

Authroutes.route("/signup").post(usersignupController);

Authroutes.route("/login").post(userloginController);

Authroutes.route("/logout").post(userlogoutController);

Authroutes.route("/passwordchange").post(userpasswordChangeController);

// Protected Routes
Authroutes.route("/user-profile").post(

  passport.authenticate("jwt", { session: false }),
);
Authroutes.route("/upload-profile-photo").post(

  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  uploadProfilePhotoController
);

export { Authroutes };