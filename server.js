const express = require("express");
const dotenv = require("dotenv");

// Import Router
const bootcamps = require("./routes/bootcamps");

// Load env
dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount Router
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode no port ${PORT}`)
);
