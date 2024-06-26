import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup); // We send the logic to controller, and call the logic as a test
router.post("/signin", signin);
router.post("/google", google);
export default router;
