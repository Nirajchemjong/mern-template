const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = process.env.MONGO_URI;

const PORT = process.env.PORT || 5050;

app.use("/api", require("./routes/api"));

const startServer = async () => {
  try {
    await mongoose.connect(db);
    console.log("Mongoose connected Successfully");

    app.listen(PORT, () => {
      console.log("server is running at ", PORT);
    });
  } catch (e) {
    console.log("error", e);
  }
};

startServer();
