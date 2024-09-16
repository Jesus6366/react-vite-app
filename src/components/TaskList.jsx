import TaskCard from "./TaskCard.jsx";
import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>There is no tasks jet</h1>;
  }

  return (
    <div className="grid grid-cols-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
