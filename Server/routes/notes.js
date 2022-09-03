const Router = require('express');
const router = Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require("../models/Notes")

// 1: Fetches all notes of the particular user . Login Required
router.get('/fetch-all-notes', fetchuser,
    async (req, res) => {
        const notes = await Notes.find({ user: req.user.id });
        res.send(notes);
    })

module.exports = router