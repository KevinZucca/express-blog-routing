const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const homeController = require("./controllers/home");
const aboutController = require("./controllers/about");
const postRouter = require("./routers/posts");

const port = process.env.PORT;

// static files configuration
app.use(express.static("public"));

// ROUTES
app.get("/", homeController.index);
app.get("/about", aboutController.index);

app.use("/posts", postRouter);

//SERVER LISTEN
app.listen(port || 8000, () => {
  console.log(`Server is running on port ${port}`);
});
