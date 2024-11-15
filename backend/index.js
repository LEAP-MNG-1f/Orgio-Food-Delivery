import express from "express";
import cors from "cors";

const server = express();
const PORT = 9000;

server.use(cors());

server.get("/", (request, response) => {
  response.json("backend ajillaj baina");
});

server.listen(PORT, () => {
  console.log(`server ajillaj ehellee http://localhost:${PORT}`);
});
