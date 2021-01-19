const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

//////
// npm run build mandatory, as the server will always serve what is inside the build folder
//////
app.use(express.static(path.join(__dirname, "client/build")));

app.listen(port, () =>
  console.log(`audelcroix-mastermind online on port ${port}!`)
);
