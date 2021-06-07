import express from 'express';

const router = express.router()

router.get("/:userid", getUserById);
router.get("/new", createUser);
router.get("/delete", deleteUser);