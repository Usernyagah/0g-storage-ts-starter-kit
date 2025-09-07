import { Router } from "express";
import multer from "multer";
import { uploadFile } from "./controllers/uploadController";

const router = Router();

// Multer setup: save uploaded files to "uploads" folder
const upload = multer({ dest: "uploads/" });

// POST /upload → handles single file upload
router.post("/upload", upload.single("file"), uploadFile);

export default router;
