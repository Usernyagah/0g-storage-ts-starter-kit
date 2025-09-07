import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../controllers/uploadController";

const router = Router();

// Configure multer to save uploads temporarily in ./uploads/
const upload = multer({ dest: "uploads/" });

// Root route (optional sanity check)
router.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// File upload route
router.post("/upload", upload.single("file"), uploadFile);

export default router;
