"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({
        email: process.env.EMAIL || "your-email@example.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/SamsonAyodele/HNG-internship-stage0",
    });
});
exports.default = router;
