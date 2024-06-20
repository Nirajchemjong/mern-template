const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const testApi = require("./routes/api");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;

app.use("/api/v1/test", testApi);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("server is running at ", PORT);
    });
  } catch (e) {
    console.log("error", e);
  }
};

startServer();
