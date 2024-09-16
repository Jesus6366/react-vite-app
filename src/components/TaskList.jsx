import TaskCard from "./TaskCard.jsx";

const TaskList = (props) => {
  if (props.tasks.length === 0) {
    return <h1>There is no tasks jet</h1>;
  }

  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
