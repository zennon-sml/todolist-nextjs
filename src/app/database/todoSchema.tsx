import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({ title: String, complete: { type: Boolean, default: false} })
const TodoModel = mongoose.model("Todo", todoSchema)

export { TodoModel }