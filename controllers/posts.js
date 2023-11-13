const express = require("express");
const fs = require("fs");
const path = require("path");
const loadNav = require("../utilities/loadNav");
const jsonPosts = require("../db");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function index(req, res) {
  res.format({
    html: () => {
      const homePage = fs.readFileSync(
        path.resolve(__dirname, "../layouts/posts/posts.html"),
        "utf-8"
      );

      const htmlContent = [];

      htmlContent.push("<h1>Ricette</h1>");
      htmlContent.push("<ul>");

      for (const post of jsonPosts) {
        htmlContent.push(
          `<li>
              <div class="card-body">
                  <h2>${post.title} </h2>
                  <p class="card-text">${post.content} </p>
                  <strong>#${post.tags} </strong>
              </div>
            </li>`
        );
      }

      htmlContent.push("</ul>");
      const joinedHtml = htmlContent.join("");

      const navbar = loadNav();
      const finalHome = homePage
        .replace("@navbar", navbar)
        .replace("@content", joinedHtml);

      res.type("html").send(finalHome);
    },
  });
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function show(req, res) {
  res.format({
    json: () => {
      const postSlug = req.params.slug;
      const post = jsonPosts.find((post) => post.slug == postSlug);

      if (!post) {
        res.status(404).send(`Post con slug ${postSlug} non trovato`);
        return;
      }
      res.type("json").send(post);
    },
  });
}

module.exports = { index, show };
