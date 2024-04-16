import express from "express";
import {
  deleteUser,
  test,
  updateUser,
  signout,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test); // We send the logic to controller, and call the logic as a test
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser); //For delete the user
router.post("/signout", signout); // Signout route

export default router;
