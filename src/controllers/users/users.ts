import { Router } from "express";
import {
    getAllUsers,
    getOneUser,
    addUser,
    deleteUser,
} from "../../providers/users";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);

export default router;
