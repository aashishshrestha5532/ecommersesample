const { MongoClient } = require("mongodb");
const express = require("express");
const assert = require("assert");
const app = express();
const port = 5000;

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri, { useUnifiedTopology: true });

var myLogger = function (req, res, next) {
  // middleware is called each time the request is made
  console.log("LOGGED");
  next();
};

const startService = async () => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // let dbs = await listDatabases(client);
  } catch (e) {
    console.error(e);
  }
};

startService();

async function createListing(client, newListing) {
  const result = await client
    .db("ecommerce")
    .collection("products")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

app.use(myLogger);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/create", async (req, res) => {
  await createListing(client, {
    name: req.name,
    summary: req.summary,
  });
});

app.put("/update/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
