import React from "react";
import css from "./DeleteButton.module.scss";
import { ReactComponent as Icon } from "./icon.svg";

const DeleteButton = (props) => {
  const { deletingTask, taskId, addingTask } = props;
  return (
    <button
      className={css.button}
      onClick={() => {
        deletingTask(taskId);
      }}
      title="delete this task"
      disabled={addingTask}
    >
      <Icon />
    </button>
  );
};
export default DeleteButton;
