import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // CORS option enabled, for dev testing
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ name: " user" });
});

app.listen(4000);
