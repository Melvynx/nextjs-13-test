import clsx from 'clsx';
import Link from 'next/link';
import { prisma } from '../lib/prisma';

export default async function TodosNavBar() {
  const todos = await prisma.todo.findMany();

  return (
    <nav className="bg-slate-900 p-4 w-64">
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={clsx('hover:underline', {
              ['line-through']: todo.completed,
            })}
          >
            <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
        <Link className="btn btn-primary" href="/todo/new">
          New todo
        </Link>
      </ul>
    </nav>
  );
}
