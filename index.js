import express from "express";
import bodyParser from "body-parser";

import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

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
