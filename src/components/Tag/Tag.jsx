import React from "react";
import { useContext } from "react";
import TaskContext from "../../store/task-context";
import "./Tag.css"

const Tag = () => {
  const { task, removeColor } = useContext(TaskContext);
  const handleRemoveColor = (bgColor) => {
    removeColor(bgColor);
  };
  return (
    <div className="tagCtn">
      {task.map((color) => {
        return (
          <div className="tag" key={color.colorTitle} style={{backgroundColor: `${color.bgColor}`}}>
            <p >{color.colorTitle}</p>
            <button onClick={() => handleRemoveColor(color.bgColor)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
