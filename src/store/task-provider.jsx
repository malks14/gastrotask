import React, { useReducer } from "react";
import TaskContext from "./task-context";

const defaultTaskState = {
  task: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        task: [...state.task, action.item],
      };
      case "REMOVE":
        return {
          ...state,
          task: state.task.filter((color) => color.bgColor !== action.bgColor),
        };
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [taskState, dispatchTaskAction] = useReducer(taskReducer, defaultTaskState);

  const addTaskHandler = (item) => {
    dispatchTaskAction({ type: "ADD", item });
  };

  const removeColorHandler = (bgColor) => {
    dispatchTaskAction({ type: "REMOVE", bgColor });
  };

  const taskContext = {
    task: taskState.task,
    addColor: addTaskHandler,
    removeColor: removeColorHandler,
  };

  return <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
