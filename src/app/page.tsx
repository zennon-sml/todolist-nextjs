import Link from "next/link";
import { prisma } from "../db";
import { TodoItem } from "../components/TodoItem";
import axios from "axios";

function getTodos() {
  return prisma.todo.findMany();
  //  await prisma.todo.create({data: {title: "test2", complete: false}})
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: { complete }})
}
// testing axios
async function getId(){
    const res = await axios.get("https://api.github.com/users/zennon-sml")
    const id = res.data.id
    console.log(id)
  
}

getId()

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className=" flex justify-between items-center mb-4">
        <h1 className="text-2x1">Afazeres</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded
       hover:bg-slate-700 focus-within:bg-slate-100 outline-none"
          href="/new"
        >
          Novo
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
        ))}
      </ul>
    </>
  );
}
