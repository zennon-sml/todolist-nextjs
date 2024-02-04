import { prisma } from "@/src/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Titulo Inválido")
    }

    await prisma.todo.create({data: {title, complete: false}})
    redirect("/")
}

export default function Page() {
  return (
    <>
      <h1 className="text-2x1">Novo</h1>
      <form className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 
            outline-none focus-within:border-indigo-800"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
       hoveri:bg-slate-700 focus-within:bg-slate-100 outline-none"
          >
            Cancelar
          </Link>
          <button
            formAction={createTodo}
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-100 outline-none"
          >
            Criar
          </button>
        </div>
      </form>
    </>
  );
}
