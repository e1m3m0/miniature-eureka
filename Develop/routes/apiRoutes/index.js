const router = require("express").Router();
const { createNewNote, validateNote, } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get("/notes", (req, res) => {
  let data = notes;
  res.json(data);
});

router.post("/notes", (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send("the note if not complete, please add either a title or text.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});



module.exports = router;