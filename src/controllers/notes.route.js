const router = require("express").Router();
const { deleteNote } = require("../providers/notes/delete");
const { getAllNotes, getNote } = require("../providers/notes/get");
const { addNote } = require("../providers/notes/post");
const { updateNote } = require("../providers/notes/put");

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;