import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test); // We send the logic to controller, and call the logic as a test

export default router;
