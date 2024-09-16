import { React, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
  );
};

export default TaskCard;
