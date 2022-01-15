import { Router } from "express";
import {
    getAllNotes,
    getNote,
    addNote,
    updateNote,
    deleteNote,
} from "../../providers/notes";
import { auth } from "../../middleware";

const router = Router();

router.use(auth);
router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
