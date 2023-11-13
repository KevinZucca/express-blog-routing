const fs = require("fs");
const path = require("path");

function loadNav() {
  const navbar = fs.readFileSync(
    path.resolve(__dirname, "../components/navbar.html"),
    "utf-8"
  );

  return navbar;
}

module.exports = loadNav;
