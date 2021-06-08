import express from 'express';
import { createUser } from '../controllers/Users.js'


const router = express.Router()

/* router.get("/:userid", getUserById); */
router.post("/new", createUser);
/* router.get("/delete", deleteUser); */

export { router as userRoutes };