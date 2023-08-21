import express from "express";

const router = express.Router();
const webhookController = require("../controller/webhook.controller");

router.get("/", webhookController.sample);

module.exports = router;

export default router;
