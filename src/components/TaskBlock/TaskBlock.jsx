import css from "./TaskBlock.module.scss";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";

const TaskBlock = (props) => {
  const { task, deletingTask, addingTask } = props;
  let count = 16,
    url;
  const name =
    task.name.slice(0, count) + (task.name.length > count ? "..." : "");
  if (addingTask) {
    url = "/";
  } else {
    url = `/${task.id}`;
  }
  return (
    <div id={task.id} className={css.task} title="click to open the task">
      <div className={css.taskGroup}>
        <Link to={url} className={css.name}>
          {name}
        </Link>
        <DeleteButton deletingTask={deletingTask} taskId={task.id} {...props} />
      </div>
      <div className={css.description}>{task.description}</div>
    </div>
  );
};

export default TaskBlock;
