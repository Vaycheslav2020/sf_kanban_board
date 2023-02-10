import "./DropdownTask.scss";
import React from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

const DropdownTask = (props) => {
  const { prevTaskList, handleSelect } = props;
  return (
    <div className="dropdown">
      <select className="dropdown-select" onChange={handleSelect}>
        <option value=""></option>
        {prevTaskList
          ? prevTaskList.map((task) => {
              return (
                <option
                  className="dropdown-option"
                  key={task.id}
                  value={task.id}
                >
                  {task.name}
                </option>
              );
            })
          : null}
      </select>
      <Arrow className="dropdown-arrow" />
    </div>
  );
};

export default DropdownTask;
