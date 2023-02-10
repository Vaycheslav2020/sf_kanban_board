import React, { useState } from "react";
import { ReactComponent as IconPlus } from "./plus.svg";
import "./BoardButton.scss";

const BoardButton = (props) => {
  const { title, addingTask, onClick, prevTaskList } = props;
  const [submit, setSubmit] = useState(false);

  const handleClick = () => {
    onClick(title, submit);
    setSubmit(!submit);
  };

  return (
    <button
      className={submit ? "button button-submit" : "button"}
      onClick={handleClick}
      disabled={addingTask && !submit || Boolean(prevTaskList.length < 1)}
    >
      {submit ? (
        "submit"
      ) : (
        <>
          <IconPlus className="button-icon" />
          <span>Add Board</span>
        </>
      )}
    </button>
  );
};
export default BoardButton;
