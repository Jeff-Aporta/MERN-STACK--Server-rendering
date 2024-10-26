import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(cors());

const PORT_SERVER_DB = process.env.PORT_SERVER_DB;

app.get("/:cmd", (req, res) => {
  const cmd = req.params["cmd"];
  try {
    const json = JSON.parse(cmd);
    res.json(json);
  } catch (error) {
    console.error(error);
    res.json({ status: "ERROR" });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  const filePath = join(__dirname, ..."/public/index.html".split("/"));
  res.sendFile(filePath);
});

app.get("/public/*", (req, res) => {
  console.log(`Route found: ${req.originalUrl}`);
  const filePath = join(__dirname, ...req.originalUrl.split("/"));
  res.sendFile(filePath);
  // res.send(filePath);
});

app.listen(PORT_SERVER_DB, () => {
  console.log(`Servidor corriendo en el puerto ${PORT_SERVER_DB}`);
});
