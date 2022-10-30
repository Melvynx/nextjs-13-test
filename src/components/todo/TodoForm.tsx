'use client';

import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';

export const TodoForm = ({ todo }: { todo?: Todo }) => {
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries()) as any;
    entries['completed'] = entries['completed'] === 'on' ? true : false;

    fetch(`/api/todo/${todo?.id ?? 'new'}`, {
      method: todo ? 'PATCH' : 'POST',
      body: JSON.stringify(entries),
    })
      .then((res) => res.json())
      .then((res) => {
        router.refresh();
        router.push(`/todo/${res.todo.id}`);
      });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <h1 className="text-4xl text-white">{todo?.title ?? 'New todo'}</h1>
      <input
        defaultValue={todo?.title}
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs input-primary"
        name="title"
      />
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Is done ?</span>
          <input
            type="checkbox"
            className="toggle"
            defaultChecked={todo?.completed}
            name="completed"
          />
        </label>
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value={todo ? 'Edit' : 'Add'}
      />
    </form>
  );
};
