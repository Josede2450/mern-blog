import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test); // We send the logic to controller, and call the logic as a test
router.put("/update/:userId", verifyToken, updateUser);

export default router;
