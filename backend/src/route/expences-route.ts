import express from "express";
import { createExp,updateExp, getAllActiveExp, getAllInactiveExp, deleteExp, restoreDeletedExpences } from "../controller/expences-controller.js";



const expencesRoute = express.Router()

expencesRoute.post('/add-expence',createExp)
expencesRoute.get('/get-active-expence',getAllActiveExp)
expencesRoute.patch('/update-expence/:id',updateExp)
expencesRoute.delete('/delete-expence/:id',deleteExp)
expencesRoute.get('/get-inactive-expence',getAllInactiveExp)
expencesRoute.patch('/restore-deleted-expence/:id',restoreDeletedExpences)

export default expencesRoute;



