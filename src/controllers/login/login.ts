import { Router } from "express";
import { createLogin } from "../../providers/login/post";

const router = Router();

router.post("/", createLogin);

export default router;
