const mongoose = require("mongoose");
const app = require("./app");
const { connectToDB } = require("./configs/db.config");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectToDB(process.env.DB_CONNECTION);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}...`));
