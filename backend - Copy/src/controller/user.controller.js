import { Users } from "lucide-react";
import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const currentUserId = req.auth.userId;
        res.status(200).json(Users);
    } catch (error) {
        next(error);
    }
};