const express = require("express");
const fs = require("fs");
const path = require("path");
const loadNav = require("../utilities/loadNav");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function index(req, res) {
  res.format({
    html: () => {
      const homePage = fs.readFileSync(
        path.resolve(__dirname, "../layouts/homepage.html"),
        "utf-8"
      );

      const navbar = loadNav();
      const finalHome = homePage.replace("@navbar", navbar);

      res.type("html").send(finalHome);
    },
  });
}

module.exports = { index };
