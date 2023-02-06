import { Transition } from "@headlessui/react";
import { TaskProps } from "../interfaces/interfaces";

interface TasksListProps {
  task: TaskProps;
  handleRemoveItem: (id: number) => void;
}

export function ListItem(props: TasksListProps) {
  //const { allTasks, newTask } = useTasks();
  const { handleRemoveItem } = props;
  const { id, task } = props.task;

  console.log("RENDERING - TasksList.tsx");

  return (
    <Transition
      appear={true}
      unmount={true}
      show={true}
      enter='transition-opacity duration-150'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-75'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <li
        className='w-full h-16 flex items-center justify-between p-2 bg-zinc-800 border-b border-b-green-500'
        key={id}
      >
        <p className='font-bold text-white'>
          {id} - {task}
        </p>

        <button
          className='font-bold p-2 mr-2 flex items-center justify-center rounded-md bg-red-500 text-md text-white'
          onClick={() => handleRemoveItem(id)}
        >
          X
        </button>
      </li>
    </Transition>
  );
}
