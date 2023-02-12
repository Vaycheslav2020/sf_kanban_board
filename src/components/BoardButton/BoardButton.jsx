import React, { useState } from "react";
import { ReactComponent as IconPlus } from "./plus.svg";
import css from "./BoardButton.module.scss";

const BoardButton = (props) => {
  const { title, addingTask, onClick, prevTaskList } = props;
  const [submit, setSubmit] = useState(false);

  const handleClick = () => {
    onClick(title, submit);
    setSubmit(!submit);
  };

  return (
    <button
      className={submit ?  css.buttonSubmit + " " + css.button : css.button}
      onClick={handleClick}
      disabled={(addingTask && !submit) || Boolean(prevTaskList.length < 1)}
    >
      {submit ? (
        "submit"
      ) : (
        <>
          <IconPlus className={css.icon} />
          <span>Add Board</span>
        </>
      )}
    </button>
  );
};
export default BoardButton;
