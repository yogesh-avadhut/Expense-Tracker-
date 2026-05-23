import { createExpense, seeAllActiveExpences, modifyExpenses, deleteExpence, restoreExpenes, getAllDeletedExpences } from "../repository/expences-repository.js";


async function createExp(req: any, res: any) {
    try {
        const data = req.body
        const addExp = await createExpense(data)
        res.send({
            error: false,
            message: "expence created successfully...",
            data: addExp
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "expences are not added ",
            errmessage: err.message
        })
    }
}

async function updateExp(req: any, res: any) {
    try {
        const data = req.body
        const id = req.params.id
        const updateExp = await modifyExpenses(id, data)
        res.send({
            error: false,
            message: "expence updated successfully...",
            data: updateExp
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "expences are not updated...",
            errmessage: err.message
        })
    }
}




async function getAllActiveExp(req: any, res: any) {
    try {
        const alldata = await seeAllActiveExpences()
        res.send({
            error: false,
            message: "all expences fetched successfully...",
            data: alldata
        })

    }
    catch (err: any) {
        res.send({
            error: true,
            message: "data are not found ",
            errmessage: err.message
        })
    }
}


async function getAllInactiveExp(req: any, res: any) {
    try {
        const alldata = await getAllDeletedExpences()
        res.send({
            error: false,
            message: "all deleted expences fetched successfully...",
            data: alldata
        })

    }
    catch (err: any) {
        res.send({
            error: true,
            message: "data are not found ",
            errmessage: err.message
        })
    }
}

async function deleteExp(req: any, res: any) {
    try {
        const id = req.params.id
        const delExp = await deleteExpence(id)
        res.send({
            error: false,
            message: "expence deleted successfully...",
            data: delExp
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "expences are not deleted ",
            errmessage: err.message
        })
    }
}



async function restoreDeletedExpences(req: any, res: any) {
    try {
        const id = req.params.id
        const restoreExpData = await restoreExpenes(id)
        res.send({
            error: false,
            message: "expence restored successfully...",
            data: restoreExpData
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "expences are not recover ",
            errmessage: err.message
        })
    }
}


export { createExp, updateExp, getAllActiveExp, getAllInactiveExp, deleteExp, restoreDeletedExpences }