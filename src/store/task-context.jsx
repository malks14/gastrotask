import React from 'react'

const TaskContext = React.createContext({
    color: [],
    addColor: (color) => {},
  });

export default TaskContext;