import css from "./TaskBlock.module.scss";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Link } from "react-router-dom";

const TaskBlock = (props) => {
  const { task, deletingTask } = props
  return (
    <Link to={`/${task.id}`} id={task.id} className={css.task} title="click to open the task">
      <div className={css.taskGroup}>
        <span className={css.name}>{task.name}</span>
        <DeleteButton deletingTask={deletingTask} taskId={task.id} {...props} />
      </div>
      <div className={css.description}>{task.description}</div>
    </Link>
  );
};

export default TaskBlock;
