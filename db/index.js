import PG from "pg"
const Pool = PG.Pool
import dbParams from "../lib/db.js"
const db = new Pool(dbParams)

export default db