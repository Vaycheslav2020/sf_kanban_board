import css from "./DropdownTask.module.scss";
import React from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

const DropdownTask = (props) => {
  const { prevTaskList, handleSelect } = props;
  return (
    <div className={css.dropdown}>
      <select className={css.select} onChange={handleSelect}>
        <option value=""></option>
        {prevTaskList
          ? prevTaskList.map((task) => {
              return (
                <option
                  key={task.id}
                  value={task.id}
                >
                  {task.name}
                </option>
              );
            })
          : null}
      </select>
      <Arrow className={css.arrow} />
    </div>
  );
};

export default DropdownTask;
