# 0G Storage Upload API

This project is an Express + TypeScript backend with Swagger API docs for uploading files to the 0G decentralized storage network.

## 🚀 Features
- File upload endpoint (`/upload`)
- Swagger API documentation (`/api-docs`)
- Health check endpoint (`/health`)
- Uses 0g-storage-client CLI under the hood for decentralized storage

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Usernyagah/0g-storage-ts-starter-kit/
cd 0g-storage-ts-starter-kit

# Install dependencies
pnpm install

# Build the project
pnpm run build

# Start the project
pnpm run start
```

## ⚙️ Development

```bash
# Run in development mode with hot reload
pnpm run dev
```

## 📂 Project Structure

```
src/
 ├── controllers/      # Request handlers
 ├── routes/           # API routes
 ├── index.ts          # App entry point
 ├── swagger.json      # API documentation
 └── config/           # Env configuration
```

## 🔗 API Endpoints

- **POST** `/upload` → Upload file to 0G Storage  
- **GET** `/health` → Server health check  
- **GET** `/api-docs` → Swagger API docs  

## 🛠️ 0G CLI Setup

Make sure you have [0g-storage-client](https://github.com/0glabs/0g-storage-client) installed and available in your PATH.

### Upload Example

```bash
0g-storage-client upload   --url https://evmrpc-testnet.0g.ai   --key <private_key>   --indexer https://indexer-storage-testnet-turbo.0g.ai   --file ./test.txt
```

### Download Example

```bash
0g-storage-client download   --indexer https://indexer-storage-testnet-turbo.0g.ai   --root <file_root_hash>   --file ./output.txt
```

## 📜 License

MIT
