import { Router } from "express";
import {
  loginTrainer,
  loginTrainerPage,
  logoutTrainer,
  registerTrainer,
  registerTrainerPage,
} from "../controllers/trainer.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  verifyUser,
  verifyTrainer,
} from "../middlewares/authenticate.middleware.js";

const trainerRouter = Router();

trainerRouter.route("/register-trainer").get(registerTrainerPage);
trainerRouter.route("/register-trainer").post(
  upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
    {
      name: "certificate",
      maxCount: 1,
    },
  ]),
  registerTrainer
);

trainerRouter.route("/login-trainer").get(loginTrainerPage);
trainerRouter.route("/login-trainer").post(loginTrainer);

//secured routes
trainerRouter.route("/logout-trainer").post(verifyTrainer, logoutTrainer);

export { trainerRouter };
