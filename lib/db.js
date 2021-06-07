import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

console.log("process", process.env.DB_HOST);

export default dbParams;
