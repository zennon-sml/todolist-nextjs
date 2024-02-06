import { TodoItem } from "../components/TodoItem";
import connectToDatabase from "./database/mongodb";
import { TodoModel } from "./database/todoSchema";

export default async function Home() {
  // Connect to the database
  await connectToDatabase();

  // Create a new todo item after the database connection is established
  const newTodo = new TodoModel({ title: "Buy rapadura" });

  try {
    const savedTodo = await newTodo.save();
    console.log("Todo item saved successfully:", savedTodo);
  } catch (error) {
    console.error("Error saving todo item:", error);
  }

  return <h1>mongo</h1>;
}