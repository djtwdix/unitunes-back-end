import express from "express";
import { createUser } from "../controllers/Users";

const router = express.router();

router.get("/:userid", getUserById);
router.post("/new", createUser);
router.get("/delete", deleteUser);
