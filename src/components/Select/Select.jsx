import React, { useState, useContext } from "react";
import TaskContext from "../../store/task-context";
import "./Select.css";

const Select = ({ jsonData }) => {
  const taskCtx = useContext(TaskContext);
  const [, setSelectedOption] = useState({
    colorTitle: "",
    bgColor: "",
  });

  const handleSelectionOption = (event) => {
    const target = event.target;
    const newTaskValue = target.value;

    const selectedColor = jsonData.find((option) => option.bgColor === newTaskValue);

    setSelectedOption({
      colorTitle: selectedColor ? selectedColor.colorTitle : "",
      bgColor: newTaskValue,
    });

    if (selectedColor && newTaskValue && !taskCtx.task.some((task) => task.bgColor === newTaskValue)) {
      taskCtx.addColor({ colorTitle: selectedColor.colorTitle, bgColor: newTaskValue });
    }
  };

  return (
    <div className="selectCtn">
      <label htmlFor="selectColor"><strong>Select values</strong><span className="mandatory">*</span></label>
      <select name="task" onChange={handleSelectionOption} id="selectColor" className="select-group">
        <option selected="true" disabled="disabled" value="">Placeholder</option>
        {jsonData.map((option) => (
          <option key={option.bgColor} value={option.bgColor}>
            {option.colorTitle}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
