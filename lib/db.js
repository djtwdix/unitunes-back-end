import dotenv from "dotenv";
dotenv.config();

const dbParams = {
  connectionString: process.env.DATABASE_URL,
};

console.log("process", process.env.DATABASE_URL);

export default dbParams;
