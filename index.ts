import Library from "./library";
import express = require("express");
var cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.get("/", (req, res) => res.send("Node & Express server running!"));

app.listen(port, () =>
  console.log(`Library app listening at http://localhost:${port}`)
);

let library = new Library();

const routes = (app) => {
  app
    .use(express.json())
    .get("/library/books", (req, res) => res.json(library.GetAllBooks()));

  app.post("/library/books", async function (req, res) {
    library.AddBook(req.body.title, req.body.author);
    await res.send(
      "book: " +
        req.body.title +
        " by author: " +
        req.body.author +
        " added to database"
    );
  });

  app.delete("/library/books", async (req, res) => {
    let book: Boolean = library.DeleteBook(req.body.title, req.body.author);
    if (!book) {
      await res.send("Book Not found!");
    } else {
      await res.send("Successfully deleted!");
    }
  });

  app.post("/library/find", async function (req, res) {
    await res.send(library.GetBook(req.body.query));
  });
};

routes(app);
