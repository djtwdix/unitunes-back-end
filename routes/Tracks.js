import express from 'express';

const router = express.router()

router.get("/:trackid", getTrackById);
router.get("/new", createTrack);
router.get("/delete", deleteTrack);