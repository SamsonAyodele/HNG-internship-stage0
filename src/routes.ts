import {Router} from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.json({
      email: process.env.EMAIL || "your-email@example.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/SamsonAyodele/HNG-internship-stage0",
    });
  });

  export default router;