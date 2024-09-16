import { React, createContext } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  let x = 20;
  return (
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContext;
