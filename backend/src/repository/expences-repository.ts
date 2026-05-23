import { expencesModel } from "../model/expence-model.js";


async function createExpense(data: any) {
    const expence = expencesModel.create({
        title: data.title,
        amount: data.amount,
        category: data.category
    })
    return expence
}


async function seeAllActiveExpences() {
    const allExpences = await expencesModel.find({status:"active"})
    return allExpences
}

async function modifyExpenses( id: any, data: any) {
    const updateData = await expencesModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    );
    return updateData;
}

async function deleteExpence(id: any) {
    const deleteExpences = await expencesModel.findByIdAndUpdate(
        { _id: id },
        { status: "inactive" },
        { new: true }
    );
    return deleteExpences
}
async function getAllDeletedExpences() {
    const deletedExp = await expencesModel.find({ status: "inactive" })
    return deletedExp
}

async function restoreExpenes(id: any) {
    const restoreExp = await expencesModel.findByIdAndUpdate(
        { _id: id },
        { status: "active" },
        { new: true }
    );
    return restoreExp
}



export { createExpense, seeAllActiveExpences, modifyExpenses, deleteExpence,getAllDeletedExpences, restoreExpenes }