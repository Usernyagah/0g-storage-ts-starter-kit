import { Request, Response } from "express";
import { Indexer } from "@0glabs/0g-ts-sdk";
import path from "path";

// Initialize indexer
const indexer = new Indexer(process.env.INDEXER_URL!);

export const downloadFile = async (req: Request, res: Response) => {
  try {
    const { rootHash } = req.params;

    if (!rootHash) {
      return res.status(400).json({ error: "Missing rootHash parameter" });
    }

    // Define where to save the file locally
    const outputPath = path.join(__dirname, "../../downloads", `${rootHash}.bin`);

    // Perform download with proof verification
    const err = await indexer.download(rootHash, outputPath, true);
    if (err) {
      console.error("Download failed:", err);
      return res.status(500).json({ error: "Download failed", details: err });
    }

    console.log("Download successful, saved to:", outputPath);

    // Send the file directly as a response
    return res.download(outputPath, `${rootHash}.bin`, (downloadErr) => {
      if (downloadErr) {
        console.error("Error sending file:", downloadErr);
      }
    });
  } catch (err) {
    console.error("Unexpected download error:", err);
    return res.status(500).json({ error: "Unexpected error", details: err });
  }
};
