import express from "express";
import db from "./db/index.js"
import { userRoutes } from "./routes/Users.js";
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

db.connect(() => {
  console.log("PSQL DB connected")
})


app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("UniTunes");
});

app.listen(PORT, () => {
  console.log(`UniTunes server listening on port ${PORT}`);
});
