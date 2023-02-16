import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as Cancel } from "./cancel.svg";
import css from "./ViewingTask.module.scss";

const ViewingTask = (props) => {
  const { taskId } = useParams();
  const [edit, setEdit] = useState(false);
  const { data, editDescription } = props;
  let task, dataDescription;

  data.map((item) => {
    const { issues } = item;
    if (issues.length) {
      issues.map((itm) => {
        if (itm.id === taskId) task = itm;
      });
    }
  });

  data.map((item) => {
    item.issues.map((task) => {
      if (task.id === taskId) {
        return (dataDescription = task.description);
      }
    });
  });

  const handleClick = () => {
    setEdit(!edit);
  };

  return (
    <>
      {task ? (
        <div id={task.id} className={css.viewingTask}>
          <div className={css.taskGroup}>
            <h4 className={css.name}>{task.name}</h4>
            <Link to="/" className={css.cancel}>
              <Cancel />
            </Link>
          </div>
          {edit ? (
            <form>
              <textarea
                name="description"
                className={css.textarea}
                placeholder="add a description?"
                onChange={(event) => editDescription(taskId, event)}
                value={dataDescription}
              ></textarea>
              <button
                className={css.submit}
                onClick={handleClick}
                type="submit"
              >
                submit
              </button>
            </form>
          ) : (
            <>
              <div className={css.description}>{task.description}</div>
              <button className={css.edit} onClick={handleClick}>
                edit description
              </button>
            </>
          )}
        </div>
      ) : null}
    </>
  );
};
export default ViewingTask;
