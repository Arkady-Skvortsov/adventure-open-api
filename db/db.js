require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE_NAME,
  host: "localhost",
  password: process.env.PG_PASSWORD,
  port: 8080,
});

pool.connect(() => {
  try {
    console.log("PostgresQL connected");
  } catch (e) {
    console.log(e);
  }
});

module.exports = pool;
