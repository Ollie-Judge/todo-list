import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let todoItem = req.body["todoItem"];
  res.render("index.ejs", { todoItemOutput: todoItem });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
