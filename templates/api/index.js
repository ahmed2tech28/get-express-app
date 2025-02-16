const express = require("express");
const cors = require("cors");
const expressfileupload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressfileupload());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ message: "Hello, world!" });
});

app.use((err, req, res, next) => {
  if (err.status) {
    err.status = 500;
  }
  if (err.message) {
    err.message = "Internal server error";
  }
  res.status(err.status).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
