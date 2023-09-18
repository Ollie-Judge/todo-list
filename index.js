import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let todoArray = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { todoArray: todoArray });
});

app.post("/submit", (req, res) => {
  let todoItem = req.body["todoItem"];
  todoArray.push(todoItem);
  res.render("index.ejs", { todoArray: todoArray });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
