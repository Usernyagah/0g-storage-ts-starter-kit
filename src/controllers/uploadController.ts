import { Request, Response } from "express";
import { Indexer, ZgFile } from "@0glabs/0g-ts-sdk";
import { ethers } from "ethers";
import { ENV } from "../config/env";

// Initialize provider and signer
const provider = new ethers.JsonRpcProvider(ENV.RPC_URL);
const rawKey = ENV.PRIVATE_KEY.startsWith("0x")
  ? ENV.PRIVATE_KEY.slice(2)
  : ENV.PRIVATE_KEY;
const signer = new ethers.Wallet(rawKey, provider);

// Initialize indexer
const indexer = new Indexer(ENV.INDEXER_URL);

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const zgFile = await ZgFile.fromFilePath(filePath);

    const [tree, errTree] = await zgFile.merkleTree();
    if (errTree || !tree) {
      return res.status(500).json({ error: "Failed to generate Merkle tree" });
    }

    const [txHash, errUpload] = await indexer.upload(zgFile, ENV.RPC_URL, signer);
    if (errUpload) {
      return res.status(500).json({ error: "Upload failed", details: errUpload });
    }

    return res.json({
      rootHash: tree.rootHash(),
      transactionHash: txHash,
    });
  } catch (err) {
    console.error("Unexpected upload error:", err);
    return res.status(500).json({ error: "Unexpected error", details: err });
  }
};



