import React from "react";
import css from "./DeleteButton.module.scss";
import { ReactComponent as Icon } from "./icon.svg";

const DeleteButton = ({ deletingTask, taskId }) => {
  return (
    <button
      className={css.button}
      onClick={() => {
        deletingTask(taskId);
      }}
      title="delete this task"
    >
      <Icon />
    </button>
  );
};
export default DeleteButton;
