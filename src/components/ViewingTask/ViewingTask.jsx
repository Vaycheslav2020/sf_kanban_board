import React from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as Cancel } from "./cancel.svg";
import css from "./ViewingTask.module.scss";

const ViewingTask = (props) => {
  const { data } = props;

  const { taskId } = useParams();
  const task = data.map((item) => {
    return Object.assign(
      item.issues.map((task) => {
        if (task.id === taskId) return Object.assign(task);
      })
    );
    return task
  });

  console.log(task);

  return (
    <div id={task.id} className={css.viewingTask}>
      <div className={css.taskGroup}>
        <h4 className={css.name}>{task.name}</h4>
        <Link to="/" className={css.cancel}>
          <Cancel />
        </Link>
      </div>
      <div className={css.description}>{task.description}</div>
    </div>
  );
};
export default ViewingTask;
