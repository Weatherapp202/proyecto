import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (_req, res) => {
  res.send("Welcome");
});

// Configurar CORS
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5000"], // Permite solicitudes solo desde esta URL
  optionsSuccessStatus: 200, // Algunos navegadores 204 (sin contenido) responde a las preflight OPTIONS con 204
};

app.use(cors(corsOptions));
// app.use("/", Projects);
// app.use("/", Technologies);

app.listen(port, () => {
  console.log("listening on port " + port + "🏗️");
});
