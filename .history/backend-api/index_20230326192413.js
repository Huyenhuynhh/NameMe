const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://huynhh4:Helloworld1234@cluster1.6nfnorh.mongodb.net/myDatabaseName?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const studentsCollection = db.collection("students");

app.post("/addStudent", async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await studentsCollection.inse
    }
})

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
  process.exit(1);
});

db.once("open", () => {
  console.log("Connected to MongoDB successfully.");

  // Add your API endpoints here

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
