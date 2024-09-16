import { React, useState, useEffect } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { tasks as data } from "./data/tasks.js";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

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

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default App;
