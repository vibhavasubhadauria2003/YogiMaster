import { User } from "../models/user.model.js";
import { Trainer } from "../models/trainer.model.js"
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const verifyUser = async (req, res, next) => {
    const token = req.cookies?.userAccessToken;
    if (!token) {
        throw new ApiResponse(401, "Unauthorized");
    }
    const decordedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user=await User.findById(decordedToken._id);
    if(!user){
        throw new ApiResponse(401,"Unauthorized");
    }
    req.user=user;
    next();
}
const verifyTrainer=async (req, res, next) => {
    const token = req.cookies?.trainerAccessToken;
    if (!token) {
        throw new ApiResponse(401, "Unauthorized");
    }
    const decordedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const trainer=await Trainer.findById(decordedToken._id);
    if(!trainer){
        throw new ApiResponse(401,"Unauthorized");
    }
    req.trainer=trainer;
    next();
}
export {verifyUser,verifyTrainer};