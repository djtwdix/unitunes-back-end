import express from "express";
import db from "./db/index.js"
const PORT = process.env.PORT || 3001;

const app = express();

db.connect(() => {
  console.log("PSQL DB connected")
})

app.get("/", (req, res) => {
  res.send("UniTunes");
});

app.listen(PORT, () => {
  console.log(`UniTunes server listening on port ${PORT}`);
});
