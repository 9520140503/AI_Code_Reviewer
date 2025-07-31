import express from "express";
import {getResponse,getSummary,getCode} from "../controllers/ai.controller.js"

const router = express.Router();

router.post('/get-review',getResponse);
router.post('/get-summary',getSummary);
router.post('/get-code',getCode);

export default router;