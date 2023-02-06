import { CompletedList } from "../assets/svg/CompletedLIst";
import { TaskProps } from "../interfaces/interfaces";
import { ListItem } from "./ListItem";

interface TasksListProps {
  allTasks: TaskProps[];
  newTask: string;
  handleRemoveItem: (id: number) => void;
}

export function TasksList(props: TasksListProps) {
  //const { allTasks, newTask } = useTasks();
  const { allTasks, newTask, handleRemoveItem } = props;

  console.log("RENDERING - TasksList.tsx");

  return (
    <div className='w-full h-full rounded-md bg-zinc-700 overflow-hidden scrollbar-thumb-green-600 scrollbar-track-transparent scrollbar-thin'>
      {allTasks && allTasks.length > 0 ? (
        <ul>
          {allTasks.map((task) => (
            <ListItem task={task} handleRemoveItem={handleRemoveItem} />
          ))}
        </ul>
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <CompletedList width={200} height={200} />
          <h1 className='text-green-500'>
            Parabéns, todas as tarefas foram completadas!
          </h1>
        </div>
      )}
    </div>
  );
}
