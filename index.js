import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let todoArray = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // take the user input and store it in an array
  // then output the array into the ejs file
  let todoItem = req.body["todoItem"];
  todoArray.push(todoItem);
  res.render("index.ejs", { todoItemOutput: todoArray });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
