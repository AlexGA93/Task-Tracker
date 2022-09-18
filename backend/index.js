// express
const express = require("express");
// cors
const cors = require("cors");

// configure dotenv
require("dotenv").config();

// production use
// const path = require('path');

const { dbConnection } = require("./database/database-config");

/////////////////////////////////////////////////////////

// create express app
const app = express();

// database connection
dbConnection();

// middlewares
// Public Directory Middleware
app.use(express.static("./public"));
//cross-domain midleware
app.use(cors());
// body-reading midleware
app.use(express.json());

//routes
app.use("/api/auth", require("./routes/auth/auth.routes"));
app.use("/dashboard", require("./routes/dashboard/dashboard.routes"));

// SERVER LISTENING
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at port ${port}`));
