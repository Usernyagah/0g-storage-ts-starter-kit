import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,
  RPC_URL: process.env.RPC_URL || "",
  PRIVATE_KEY: process.env.PRIVATE_KEY || "",
  INDEXER_URL: process.env.INDEXER_URL || "",
};



