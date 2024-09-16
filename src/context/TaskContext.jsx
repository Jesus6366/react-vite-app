import { React, createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (selectedTask) => {
    const filteredTasks = tasks.filter((task) => task.id !== selectedTask);

    setTasks(filteredTasks);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
