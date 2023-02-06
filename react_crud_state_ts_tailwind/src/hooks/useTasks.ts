import { useState } from "react";

interface TaskProps {
  id: number;
  task: string;
}

export function useTasks() {
  const [newTask, setNewTask] = useState<string>("");
  const [allTasks, setAllTasks] = useState<TaskProps[]>([]);

  function addNewTask() {
    console.log("addNewTask");
    if (newTask != "") {
      setAllTasks([
        ...allTasks,
        {
          id: allTasks.length + 1,
          task: newTask,
        },
      ]);
    } else {
      console.log("newTask vazio");
    }

    console.log(allTasks);
  }
  return { newTask, setNewTask, allTasks, setAllTasks, addNewTask };
}
