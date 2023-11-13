const express = require("express");
const path = require("path");
const fs = require("fs");
const loadNav = require("../utilities/loadNav");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function index(req, res) {
  res.format({
    html: () => {
      const navbar = loadNav();

      const about = fs.readFileSync(
        path.resolve(__dirname, "../layouts/about.html"),
        "utf-8"
      );
      const finalAbout = about.replace("@navbar", navbar);

      res.type("html").send(finalAbout);
    },
  });
}

module.exports = { index };
