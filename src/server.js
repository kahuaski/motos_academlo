require("dotenv").config();
const app = require("./app");
const { db } = require("./database/config");

db.authenticate()
  .then((res) => console.log("database auth ..."))
  .catch((err) => console.log(err));
db.sync()
  .then((res) => console.log("database sync ...."))
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running port: ${PORT}.....`);
});
