const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  database: "adventure",
  port: 8080,
  host: "localhost",
  password: "rambler557",
});

pool.connect(() => {
  try {
    console.log("PostgresQL connected");
  } catch (e) {
    console.log(e);
  }
});

module.exports = pool;
