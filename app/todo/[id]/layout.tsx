import { PropsWithChildren } from 'react';

const TodoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" p-4 bg-gray-500 bg-opacity-20 rounded-xl w-full">
      {children}
    </div>
  );
};
export default TodoLayout;
