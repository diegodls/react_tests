import { useState } from "react";
import { Input } from "./components/Input";
import { TasksList } from "./components/TasksList";
import { TaskProps } from "./interfaces/interfaces";

export function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [allTasks, setAllTasks] = useState<TaskProps[]>([]);

  function handleAddItem(): void {
    if (newTask.trim() != "") {
      let newId =
        allTasks.length > 0 ? allTasks[allTasks.length - 1].id + 1 : 1;
      setAllTasks([...allTasks, { id: newId, task: newTask }]);
      setNewTask("");
    }
  }
  function handleRemoveItem(id: number): void {
    let filteredList: TaskProps[] = allTasks.filter((t) => t.id !== id);
    setAllTasks(filteredList);
  }
  return (
    <div className='w-screen h-screen min-w-max flex justify-center items-center'>
      <div className='w-4/5 max-w-xl min-w-max h-full max-h-96 flex flex-col items-center gap-2'>
        <Input
          newTask={newTask}
          setNewTask={setNewTask}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
          handleAddItem={handleAddItem}
        />
        <TasksList
          newTask={newTask}
          allTasks={allTasks}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
    </div>
  );
}
