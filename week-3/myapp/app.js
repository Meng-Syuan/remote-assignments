const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.get("/sum.html", (req, res) => {
  res.render("sum");
});

//使用 getData，確認是否為正整數
app.get("/getData", (req, res) => {
  let { number } = req.query;

  if (!number) {
    res.send("Lack of Parameter");
  } else if (Number.isInteger(Number(number)) && Number(number) > 0) {
    number = Number(number);
    let result;
    result = ((1 + number) * number) / 2;
    res.send(result.toString());
  } else {
    res.send("Wrong Parameter");
  }
});

app.listen(port, () => {
  console.log(`伺服器正在聆聽並運行 port ${port}`);
});
