import Link from "next/link";
import { TodoItem } from "../components/TodoItem";
import connectToDatabase from "../mongodb";



export default async function Home() {
  try {
    const db = await connectToDatabase();

    console.log("vrau")
  } catch (error) {
    console.error('Error in API route:', error);
  }
  return <h1>mongo</h1>
}