import React from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as Cancel } from "./cancel.svg";
import css from "./ViewingTask.module.scss";

const ViewingTask = (props) => {
  const { data } = props;
  let task;

  const { taskId } = useParams();
  data.map((item) => {
    const { issues } = item;
    if (issues.length) {
      issues.map((itm) => {
        if (itm.id === taskId) task = itm;
      });
    }
  });

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
