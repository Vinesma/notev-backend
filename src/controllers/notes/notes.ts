import { Router } from "express";
import {
    getAllNotes,
    getNote,
    addNote,
    updateNote,
    deleteNote,
} from "../../providers/notes";

const router = Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
