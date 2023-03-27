const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoose
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://huynhh4:Helloworld1234@cluster1.6nfnorh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }
  console.log("Connected to MongoDB successfully.");

  const db = client.db("myDatabaseName");

  // Add your API endpoints here

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
