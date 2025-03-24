import express, { Request } from "express";
const server = express();

server.get("/", (_, res: any) => {
  return res.send("hello wolrd");
});

export { server };
