import { Router } from "express";
import {DeleteToDo, getToDos, saveToDo, updateToDo} from '../controller/todo.controller.js'

const router = Router()

router.get("/get", getToDos);
router.post("/save", saveToDo)
router.delete("/delete/:id", DeleteToDo)

export default router;