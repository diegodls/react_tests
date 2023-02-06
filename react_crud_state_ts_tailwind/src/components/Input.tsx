import { Dispatch, SetStateAction } from "react";
import { TaskProps } from "../interfaces/interfaces";

interface InputProps {
  allTasks: TaskProps[];
  setAllTasks: Dispatch<SetStateAction<TaskProps[]>>;
  newTask: string;
  setNewTask: Dispatch<SetStateAction<string>>;
  handleAddItem: () => void;
}
console.log("RENDERING - Input.tsx");

export function Input(props: InputProps) {
  //const { newTask, setNewTask, allTasks, addNewTask } = useTasks();
  const { newTask, setNewTask, handleAddItem } = props;

  return (
    <div className='w-full flex justify-center gap-2'>
      <input
        className='w-full p-2 rounded-md border-b border-b-green-500 bg-zinc-700 focus:ring-green-500 placeholder-zinc-400 text-zinc-100 focus:border-green-500 focus:ring-1 focus:outline-none resize-none '
        placeholder='Incluir tarefa'
        type='text'
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
      />
      <button className='px-4 bg-green-600 rounded-md' onClick={handleAddItem}>
        +
      </button>
    </div>
  );
}
