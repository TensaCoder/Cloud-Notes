const Router = require('express');
const router = Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Notes = require("../models/Notes")

// 1: Fetches all notes of the particular user using GET at /fetch-all-notes. Login Required
router.get('/fetch-all-notes', fetchuser,
    async (req, res) => {
        try {
            const notes = await Notes.find({ user: req.user.id });
            res.send(notes);
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error!!!")
        }
    });

// 2: Create a new note of a user using POST at /add-note. Login Required
router.post('/add-note', fetchuser,
    [
        body('title').isLength({ min: 3 }),
        body('description', 'Description should be atleast 8 character').isLength({ min: 8 })
    ],
    async (req, res) => {
        try {
            // Check if there are any errors in validating the user inputs
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { title, description, tag } = req.body;

            // Adds a new note to the Database
            const newNote = await Notes.create({
                user: req.user.id,
                title: title,
                description: description,
                tag: tag
            })
            res.send(newNote);

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error!!!")
        }
    });

// 3: Update an existing note of a user using PUT /api/notes/update-note. Login Required
router.put('/update-note/:id', fetchuser,
    async (req, res) => {
        const { title, description, tag } = req.body;
        let newNote = {};
        // Check the the incoming req has any items that need to be updated
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // Will fetch the notes with the particular 'id' from the DB
        let note = await Notes.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found!!!") }

        // Checks if the sign in user is accessing his own notes only
        if (req.user.id !== notes.user.toString()) {
            return res.status(401).send("Not Allowed!!!")
        }

        // Now the user is accessing his own notes and will finally update the notes
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({note})

    });


module.exports = router