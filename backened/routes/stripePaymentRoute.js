import express from "express";
import { makePaymentWithStripe } from "../controllers/stripePaymentController.js";
import Protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/stripe").post(Protect, makePaymentWithStripe);

export default router;
