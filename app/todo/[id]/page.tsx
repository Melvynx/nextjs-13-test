import { TodoForm } from '../../../src/components/todo/TodoForm';
import { prisma } from '../../../src/lib/prisma';

const Todo = async (props: any) => {
  if (props.params.id === 'new') {
    return <TodoForm />;
  }

  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(props.params.id),
    },
  });

  if (!todo) {
    throw new Error(`Todo ${props.params.id} is undefined !`);
  }

  return <TodoForm todo={JSON.parse(JSON.stringify(todo))} />;
};

export default Todo;
