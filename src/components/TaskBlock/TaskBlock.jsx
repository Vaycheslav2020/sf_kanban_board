import css from "./TaskBlock.module.scss";
import DeleteButton from "../DeleteButton/DeleteButton";

const TaskBlock = ({ task, deletingTask }) => {
  return (
    <div id={task.id} className={css.task} title="click to open the task">
      <div className={css.taskGroup}>
        <h4 className={css.name}>{task.name}</h4>
        <DeleteButton deletingTask={deletingTask} taskId={task.id} />
      </div>
      <div className={css.description}>{task.description}</div>
    </div>
  );
};

export default TaskBlock;
