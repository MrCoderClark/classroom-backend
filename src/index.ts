import express, { Request, Response } from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello, welcome to the Classroom API!");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
