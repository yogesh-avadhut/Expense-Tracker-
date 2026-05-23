import mongoose from "mongoose";


const expencesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            "Food",
            "Travel",
            "Shopping",
            "Other"
        ],
        default: "Other",
    },
    status: {
        type: String,
        required: true,
        enum: ["active","inactive"],
        default: "active"
    }
})

const expencesModel = mongoose.model("expencesModel", expencesSchema)

export { expencesModel }