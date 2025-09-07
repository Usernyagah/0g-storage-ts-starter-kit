import { Multer } from "multer";

declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File; // tells TS that req.file may exist
    }
  }
}
