import { OpenAPIV3 } from "openapi-types";

export const swaggerSpec: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: {
    title: "0G Storage TS Starter Kit",
    version: "1.0.0",
    description: "API documentation for file uploads to 0G",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  paths: {
    "/upload": {
      post: {
        summary: "Upload a file",
        description: "Uploads a file to the 0G network",
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  file: {
                    type: "string",
                    format: "binary",
                  },
                },
                required: ["file"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "File uploaded successfully",
          },
          "500": {
            description: "Server error",
          },
        },
      },
    },
  },
};
